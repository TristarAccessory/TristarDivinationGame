import styled from "styled-components";
import {useState} from "react";

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

const AnswerButton = ({answer, handleChoice}: {
    answer: { text: string, type: string },
    handleChoice: (choice: string) => void,
}) => {
    const [disableButton, setDisableButton] = useState(false);

    const handleClick = () => {
        setDisableButton(true);
        handleChoice(answer.type);
    }
    return <StyledButton onClick={handleClick} disabled={disableButton}>{answer.text}</StyledButton>;
};

export default AnswerButton;
