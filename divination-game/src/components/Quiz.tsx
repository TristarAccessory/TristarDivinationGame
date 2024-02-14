import {Container, Stack} from "react-bootstrap";
import styled from "styled-components";

import AnswerButton from "#/Shared/AnswerButton";

import diamond from "@/assets/shared/diamond.webp"

const QuizTitle = styled.h1`
    color: rgb(250, 155, 94);
    text-align: center;
    font-weight: bolder;
    margin-bottom: 2rem;
`;

const QuizSubtitle = styled.h2`
    color: rgb(250, 155, 94);
    font-weight: bolder;
    margin-bottom: 2rem;
`;

const DiamondIcon = styled.div`
    background-image: url(${diamond});
    background-size: contain;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;

const AnswerButtonContainer = styled(Stack)`
    background-color: rgb(254, 239, 232);
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    width: auto;
    position: relative;
    max-width: 500px;
`;

const Quiz = ({quizNumber, quizData, handleChoice}: {
    quizNumber: number,
    quizData: { question: string, answers: { text: string, type: string }[] },
    handleChoice: (choice: string) => void
}) => {
    const answerChoice = quizData.answers;
    return (
        <Container className="position-fixed top-50 start-50 translate-middle text-center">
            <QuizTitle>Q{quizNumber}</QuizTitle>
            <QuizSubtitle>{quizData.question}</QuizSubtitle>
            <AnswerButtonContainer gap={3}>
                <DiamondIcon/>
                {answerChoice.map((answer, index) =>
                    <AnswerButton key={index}
                                  answer={answer}
                                  handleChoice={handleChoice}/>)}
            </AnswerButtonContainer>
        </Container>
    )
}

export default Quiz;
