import {Col, Container, Row, Stack} from "react-bootstrap";
import IconBlock from "#/Result/LuckResult/IconBlock.tsx";
import ParseResult from "#/Result/LuckResult/ParseResult.tsx";
import Description from "#/Result/LuckResult/Description.tsx";
import AnswerButton from "#/Quiz/AnswerButton.tsx";
import styled from "styled-components";

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

const LeftAlignedCol = styled(Col)`
    display: flex;
    justify-content: flex-start;
`;

const LuckResult = ({luckyType, luckIcon, luckResult, luckDescription, showMoreInfo, restart}: {
    luckyType: string,
    luckIcon: string,
    luckResult: { [key: string]: number },
    luckDescription: string[],
    showMoreInfo: () => void,
    restart: () => void,
}) => {
    return (
        <>
            <ResultHeader>你的運勢是</ResultHeader>
            <Container className="mb-3">
                <Row className="justify-content-between">
                    <LeftAlignedCol xs={6} sm={6} md={6} lg={6} className="pe-0">
                        <IconBlock luckyType={luckyType} icon={luckIcon}/>
                    </LeftAlignedCol>
                    <Col xs={6} sm={6} md={6} lg={6} className="ps-0">
                        <ParseResult luckResult={luckResult}/>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-3">
                <Description luckDescription={luckDescription}/>
            </Container>
            <Container>
                <Stack gap={3}>
                    <AnswerButton answer={
                        {
                            text: "查看你的專屬幸運石", type:
                                "showMoreInfo"
                        }
                    } handleChoice={
                        showMoreInfo
                    }/>
                    <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
                </Stack>
            </Container>
        </>
    );
}

export default LuckResult;
