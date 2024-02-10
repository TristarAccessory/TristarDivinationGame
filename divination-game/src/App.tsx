import StartPage from "./components/StartPage.tsx";
import styled, {keyframes} from "styled-components";
import background from "@/assets/shared/background.svg";
import brand from "@/assets/shared/brand.webp";
import {useEffect, useState} from "react";
import Quiz from "#/Quiz.tsx";
import quizData from "@/utils/quizData.ts";
import Result from "#/Result.tsx";

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
    bottom: 10px;
    left: 50%;
    width: 50px;
    transform: translate(-50%, 0);
    border-radius: 50%;
    z-index: -1;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const PageContainerEntering = styled.div`
    animation: ${fadeIn} 1s forwards;
`;

const PageContainerExiting = styled.div`
    animation: ${fadeOut} 1s forwards;
`;

function App() {
    const [gamePage, setGamePage] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [contentToExit, setContentToExit] = useState(<></>);
    const [userChoices, setUserChoices] = useState({});

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
        console.log("計算結果", userChoices);
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
                    <Result/>
                </PageContainerEntering>
            )}
            <a href="https://d97642-3.myshopify.com/">
                <Brand src={brand} alt="brand"/>
            </a>
        </>
    );
}

export default App
