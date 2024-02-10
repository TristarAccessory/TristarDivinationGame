import AnswerButton from "#/Quiz/AnswerButton.tsx";
import {Container} from "react-bootstrap";

const Result = () => {
    return (
        <Container className="position-fixed top-50 start-50 translate-middle text-center">
            <h1>Result</h1>
            <AnswerButton answer={{text: "Try Again", type: "restart"}} handleChoice={() => {}}/>
        </Container>
    );
}

export default Result;
