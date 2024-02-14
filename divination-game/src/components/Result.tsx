import {useState} from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

import LuckResult from "#/Result/LuckResult.tsx";
import LuckyStone from "#/Result/LuckyStone.tsx";

import frame from "@/assets/result/frame.svg";
import resultData from "@/utils/resultData.ts";

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

const Result = ({finalResult, restart}: {
    finalResult: string,
    restart: () => void,
}) => {
    const [resultCategory, luckyType] = finalResult.split("X");

    const result = resultData[resultCategory] ?? resultData[Object.keys(resultData)[0]];
    const {
        luck: luckResult,
        description: luckDescription,
        icon: luckIcon,
    } = result.luckyType[luckyType] ?? result.luckyType[Object.keys(result.luckyType)[0]];
    const resultDescription = result.description;

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return (
        <>
            <FrameContainer/>
            <StyledContainer className="position-fixed top-50 start-50 translate-middle text-center">
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
                        resultIcon={luckIcon}
                        resultDescription={resultDescription}
                        toggleMoreInfo={toggleMoreInfo}
                        restart={restart}
                    />
                )}
            </StyledContainer>
        </>
    );
}

export default Result;
