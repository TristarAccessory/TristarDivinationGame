import {Col, Container, Row, Stack} from "react-bootstrap";
import styled from "styled-components";

import IconBlock from "#/Shared/Result/LuckResult/IconBlock.tsx";
import ParseResult from "#/Shared/Result/LuckResult/ParseResult.tsx";
import Description from "#/Shared/Result/Shared/Description.tsx";
import AnswerButton from "#/Game/Shared/AnswerButton.tsx";

import ResultHeader from "#/Shared/Result/Shared/ResultHeader.tsx";
import ShareModal from "#/Shared/Result/ShareModal.tsx";

const LeftAlignedCol = styled(Col)`
    display: flex;
    justify-content: flex-start;
`;

const LuckResult = (
    {
        isShared,
        luckyType,
        luckIcon,
        luckResult,
        luckDescription,
        toggleMoreInfo,
        shareUrl,
        restart,
    }: {
        isShared: boolean,
        luckyType: string,
        luckIcon: string,
        luckResult: { [key: string]: number },
        luckDescription: string[],
        toggleMoreInfo: () => void,
        shareUrl: string,
        restart: () => void,
    }) => {
    const resultHeader = isShared ? "你的朋友的運勢是" : "你的運勢是";
    const restartText = isShared ? "開使測驗" : "再玩一次";

    return (
        <>
            <ResultHeader>{resultHeader}</ResultHeader>
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
                    <Row className="justify-content-between">
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <AnswerButton answer={{text: "專屬幸運石", type: "showMoreInfo"}}
                                          handleChoice={toggleMoreInfo}/>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <AnswerButton answer={{text: restartText, type: "restart"}}
                                          handleChoice={restart}/>
                        </Col>
                    </Row>
                    <ShareModal shareUrl={shareUrl}/>
                </Stack>
            </Container>
        </>
    );
}

export default LuckResult;
