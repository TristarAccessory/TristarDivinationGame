import {Container, Stack} from "react-bootstrap";

import Description from "#/Result/Shared/Description.tsx";

import ResultHeader from "#/Result/Shared/ResultHeader.tsx";
import AnswerButton from "#/Shared/AnswerButton.tsx";

const LuckyStone = ({resultCategory, resultIcon, resultDescription, toggleMoreInfo, restart}: {
    resultCategory: string,
    resultIcon: string,
    resultDescription: string,
    toggleMoreInfo: () => void,
    restart: () => void,
}) => {
    return (
        <>
            <ResultHeader>你的專屬幸運石</ResultHeader>
            <Container className="mb-3">
                <img src={resultIcon} alt={resultCategory} className="w-50"/>
            </Container>
            <Container className="mb-3">
                <Description luckDescription={[resultDescription]}/>
            </Container>
            <Container>
                <Stack gap={3}>
                    <AnswerButton answer={{text: "查看你的運勢", type: "showMoreInfo"}} handleChoice={toggleMoreInfo}/>
                    <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
                </Stack>
            </Container>
        </>
    );
}

export default LuckyStone;
