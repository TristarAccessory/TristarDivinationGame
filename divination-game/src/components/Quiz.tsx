import {Container, Stack} from "react-bootstrap";
import styled from "styled-components";
import AnswerButton from "./Quiz/AnswerButton";

const QuizTitle = styled.h1`
    color: rgb(250, 155, 94);
    text-align: center;
    font-weight: bolder;
    margin-bottom: 2rem;
`;

const QuizSubtitle = styled.h2`
    color: rgb(250, 155, 94);
    font-weight: bolder;
    margin-bottom: 1rem;
`;

const AnswerButtonContainer = styled(Stack)`
    background-color: rgb(254, 239, 232);
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    width: auto;
`;

const Quiz = ({quizNumber, nextPage}: {quizNumber: number, nextPage: () => void}) => {
    const answerChoice = ["範例答案1", "範例答案2", "範例答案3", "範例答案4"];
    return (
        <>
            <Container className="position-fixed top-50 start-50 translate-middle text-center">
                <QuizTitle>Q{quizNumber}</QuizTitle>
                <QuizSubtitle>這是個範例問題，比方說一加一等於多少?</QuizSubtitle>
                <AnswerButtonContainer gap={3}>
                    {answerChoice.map((answer, index) => (
                        <AnswerButton
                            key={index}
                            answer={answer}
                            nextPage={nextPage}
                        />
                    ))}
                </AnswerButtonContainer>
            </Container>
        </>
    )
}

export default Quiz;
