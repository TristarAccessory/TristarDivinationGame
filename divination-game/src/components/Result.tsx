import AnswerButton from "#/Quiz/AnswerButton.tsx";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

import IconBlock from "#/Result/IconBlock.tsx";

import frame from "@/assets/result/frame.svg";
import ParseResult from "#/Result/ParseResult.tsx";
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

const ResultHeader = styled.h1`
    font-weight: 400;
    font-size: 2rem;
    font-style: normal;
    color: #d5b6ed;
    position: relative;
    z-index: 1;

    text-shadow: 1px 1px 0 #a080a0;
    margin-bottom: 2rem;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        color: white;
        text-shadow: 0 0 6px white,
        0 0 10px white,
        0 0 6px white;
        opacity: 0.5;
    }
`;

const Result = ({finalResult, restart}: {
    finalResult: string,
    restart: () => void,
}) => {
    const [resultCategory, luckyType] = finalResult.split("X");
    console.log(resultCategory, luckyType);

    const result = resultData[resultCategory] ?? resultData[Object.keys(resultData)[0]];
    const {
        luck: luckResult,
        description: luckDescription,
        icon: luckIcon,
    } = result.luckyType[luckyType] ?? result.luckyType[Object.keys(result.luckyType)[0]];
    const resultDescription = result.description;

    return (
        <>
            <FrameContainer/>
            <StyledContainer className="position-fixed top-50 start-50 translate-middle text-center">
                <ResultHeader>你的運勢是</ResultHeader>
                <Container className="mb-5">
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} className="pe-0">
                            <IconBlock luckyType={luckyType} icon={luckIcon}/>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className="ps-0">
                            <ParseResult luckResult={luckResult}/>
                        </Col>
                    </Row>
                </Container>
                <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
            </StyledContainer>
        </>
    );
}

export default Result;
