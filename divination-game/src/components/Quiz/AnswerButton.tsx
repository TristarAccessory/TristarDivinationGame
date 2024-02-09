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

    &:hover,
    &:focus {
        background-color: rgb(212, 182, 175);
        border-color: rgb(192, 162, 155);
        color: #fff;
    }

    &:active {
        background-color: rgb(192, 162, 155);
        border-color: rgb(172, 142, 135);
    }

    // 修饰禁用状态的按钮样式
    &:disabled {
        background-color: #cccccc;
        border-color: #bbbbbb;
        color: #666666;
        cursor: not-allowed;
    }
`;

const AnswerButton = ({ answer, nextPage}: { answer: string, nextPage: () => void }) => {
    return <StyledButton onClick={nextPage}>{answer}</StyledButton>;
};

export default AnswerButton;
