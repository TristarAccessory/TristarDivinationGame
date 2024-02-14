import {Col, Container, Row, Stack} from "react-bootstrap";
import styled from "styled-components";

import IconBlock from "#/Result/LuckResult/IconBlock.tsx";
import ParseResult from "#/Result/LuckResult/ParseResult.tsx";
import Description from "#/Result/Shared/Description.tsx";
import AnswerButton from "#/Shared/AnswerButton.tsx";

import ResultHeader from "#/Result/Shared/ResultHeader.tsx";

const LeftAlignedCol = styled(Col)`
    display: flex;
    justify-content: flex-start;
`;

const LuckResult = ({luckyType, luckIcon, luckResult, luckDescription, toggleMoreInfo, restart}: {
    luckyType: string,
    luckIcon: string,
    luckResult: { [key: string]: number },
    luckDescription: string[],
    toggleMoreInfo: () => void,
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
                    } handleChoice={toggleMoreInfo}/>
                    <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
                </Stack>
            </Container>
        </>
    );
}

export default LuckResult;
