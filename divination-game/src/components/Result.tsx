import AnswerButton from "#/Quiz/AnswerButton.tsx";
import {Container} from "react-bootstrap";

const Result = ({finalResult, restart}: {
    finalResult: string,
    restart: () => void,
}) => {
    return (
        <Container className="position-fixed top-50 start-50 translate-middle text-center">
            <h1>{finalResult}</h1>
            <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
        </Container>
    );
}

export default Result;
