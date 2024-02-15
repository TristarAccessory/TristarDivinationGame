import {useState} from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

import LuckResult from "#/Result/LuckResult.tsx";
import LuckyStone from "#/Result/LuckyStone.tsx";

import frame from "@/assets/result/frame.svg";
import resultData from "@/utils/resultData.ts";
import {fadeIn, fadeOut} from "@/styles/animations.ts";

const FrameContainer = styled.div`
    border: 20px solid transparent;
    border-image: url(${frame}) 200 fill round;
    width: calc(100vh - 20px);
    height: calc(100vw - 20px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    z-index: -1;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 768px) {
        border-image: url(${frame}) 100 fill round;
    }

    @media (max-width: 576px) {
        border-image: url(${frame}) 80 fill round;
    }
`;

const StyledContainer = styled(Container)`
    max-width: 500px;
`;

const AnimatedContainerFadeIn = styled.div`
    animation: ${fadeIn} 0.5s ease-out forwards;
`;

const AnimatedContainerFadeOut = styled.div`
    animation: ${fadeOut} 0.5s ease-out forwards;
`;

const Result = ({finalResult, restart}: {
    finalResult: string,
    restart: () => void,
}) => {
    const [resultCategory, luckyType] = finalResult.split("X");

    const result = resultData[resultCategory] ?? resultData[Object.keys(resultData)[0]];
    const {
        description: resultDescription,
        image: resultImage,
        luckyType: resultLuckyType,
    } = result;
    const {
        luck: luckResult,
        description: luckDescription,
        icon: luckIcon,
    } = resultLuckyType[luckyType] ?? resultLuckyType[Object.keys(resultLuckyType)[0]];

    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const AnimatedContainer = isAnimating ? AnimatedContainerFadeOut : AnimatedContainerFadeIn;

    const toggleMoreInfo = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setShowMoreInfo(!showMoreInfo);
                setIsAnimating(false);
            }, 500);
        }
    };

    return (
        <>
            <FrameContainer/>
            <StyledContainer className="position-fixed top-50 start-50 translate-middle text-center">
                <AnimatedContainer>
                    {!showMoreInfo ? (
                        <LuckResult
                            luckyType={luckyType}
                            luckIcon={luckIcon}
                            luckResult={luckResult}
                            luckDescription={luckDescription}
                            toggleMoreInfo={toggleMoreInfo}
                            restart={restart}
                        />
                    ) : (
                        <LuckyStone
                            resultCategory={resultCategory}
                            resultImage={resultImage}
                            resultDescription={resultDescription}
                            toggleMoreInfo={toggleMoreInfo}
                        />
                    )}
                </AnimatedContainer>
            </StyledContainer>
        </>
    );
}

export default Result;
