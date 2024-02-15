import {Container, Stack} from "react-bootstrap";

import Description from "#/Result/Shared/Description.tsx";

import ResultHeader from "#/Result/Shared/ResultHeader.tsx";
import AnswerButton from "#/Shared/AnswerButton.tsx";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: rgb(232, 202, 195);
    border: 0;
    color: #A0522D;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: rgb(212, 182, 175);
        border-color: rgb(192, 162, 155);
        color: #fff;
    }

    &:active, &:disabled {
        background-color: rgb(192, 162, 155);
        border-color: rgb(172, 142, 135);
    }
`;

const LuckyStone = ({resultCategory, resultIcon, resultDescription, toggleMoreInfo}: {
    resultCategory: string,
    resultIcon: string,
    resultDescription: string,
    toggleMoreInfo: () => void,
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
                    <StyledButton as="a" href="https://reurl.cc/OGr3MX">製作你的專屬幸運石</StyledButton>
                </Stack>
            </Container>
        </>
    );
}

export default LuckyStone;
