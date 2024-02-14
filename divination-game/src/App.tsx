import {useEffect, useState} from "react";
import styled from "styled-components";

import StartPage from "./components/StartPage.tsx";
import quizData from "@/utils/quizData.ts";
import Result from "#/Result.tsx";
import Quiz from "#/Quiz.tsx";

import background from "@/assets/shared/background.svg";
import brand from "@/assets/shared/brand.webp";
import {fadeIn, fadeOut} from "@/styles/animations.ts";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

const Brand = styled.img`
    position: fixed;
    bottom: 5px;
    left: 50%;
    width: 50px;
    transform: translate(-50%, 0);
    border-radius: 50%;
    z-index: 0;
`;

const PageContainerEntering = styled.div`
    animation: ${fadeIn} 1s forwards;
`;

const PageContainerExiting = styled.div`
    animation: ${fadeOut} 1s forwards;
`;

function App() {
    const [gamePage, setGamePage] = useState(11);
    const [isExiting, setIsExiting] = useState(false);
    const [contentToExit, setContentToExit] = useState(<></>);
    const [finalResult, setFinalResult] = useState('');
    const [userChoices, setUserChoices] = useState({
        "1": "剛玉X中吉",
        "2": "鋯石X大吉",
        "3": "尖晶石X中吉",
        "4": "剛玉X吉",
        "6": "尖晶石X中吉",
        "7": "剛玉X中吉",
        "8": "鋯石X大吉",
        "9": "尖晶石X中吉",
        "10": "鋯石"
    });

    const handleChoice = (choice: string) => {
        const updatedChoices = {
            ...userChoices,
            [gamePage]: choice,
        };
        setUserChoices(updatedChoices);
        nextPage();
    };

    useEffect(() => {
        if (gamePage === quizData.length + 1) {
            calculateResult();
        }
    }, [gamePage, userChoices]);

    const calculateResult = () => {
        // 決定礦石類型
        const stoneType = userChoices["10"];

        // 過濾出與礦石類型相關的選擇
        const relevantChoices = Object.values(userChoices).slice(1, -1)
            .filter(choice => choice.includes(stoneType));

        // 統計選擇頻率
        const frequency: { [choice: string]: number } = {};
        let maxFreq = 0;
        let mostFrequent = "";

        relevantChoices.forEach(choice => {
            frequency[choice] = (frequency[choice] || 0) + 1;
            if (frequency[choice] > maxFreq) {
                maxFreq = frequency[choice];
                mostFrequent = choice;
            }
        });

        setFinalResult(mostFrequent);
    };


    const nextPage = () => {
        if (isExiting) return;

        setContentToExit(
            gamePage === 0 ? <StartPage nextPage={nextPage}/> :
                <Quiz quizNumber={gamePage}
                      quizData={quizData[gamePage - 1]}
                      handleChoice={handleChoice}
                />,
        );
        setTimeout(() => {
            setIsExiting(true);
        }, 500);
        setTimeout(() => {
            setGamePage((prev) => prev + 1);
            setIsExiting(false);
            setContentToExit(<></>);
        }, 1000);
    };

    /**
     * 重新開始遊戲
     */
    const restart = () => {
        setGamePage(0);
    };

    return (
        <>
            <Background/>
            {!isExiting && gamePage === 0 && (
                <PageContainerEntering>
                    <StartPage nextPage={nextPage}/>
                </PageContainerEntering>
            )}
            {isExiting && (
                <PageContainerExiting>
                    {contentToExit}
                </PageContainerExiting>
            )}
            {!isExiting && gamePage > 0 && gamePage <= quizData.length && (
                <PageContainerEntering>
                    <Quiz
                        quizNumber={gamePage}
                        quizData={quizData[gamePage - 1]}
                        handleChoice={handleChoice}
                    />
                </PageContainerEntering>
            )}
            {!isExiting && gamePage > quizData.length && (
                <PageContainerEntering>
                    <Result
                        finalResult={finalResult}
                        restart={restart}
                    />
                </PageContainerEntering>
            )}
            <a href="https://d97642-3.myshopify.com/">
                <Brand src={brand} alt="brand"/>
            </a>
        </>
    );
}

export default App
