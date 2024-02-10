import AnswerButton from "#/Quiz/AnswerButton.tsx";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import frame from "@/assets/result/frame.svg";

const FrameContainer = styled.div`
    border: 20px solid transparent;
    border-image: url(${frame}) 200 fill round;
    width: calc(100vh - 20px);
    height: calc(100vw - 20px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    z-index: -1;
    overflow: hidden;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        border-image: url(${frame}) 100 fill round;
    }
    
    @media (max-width: 576px) {
        border-image: url(${frame}) 80 fill round;
    }
`;

const Result = ({finalResult, restart}: {
    finalResult: string,
    restart: () => void,
}) => {
    return (
        <>
            <FrameContainer/>
            <Container className="position-fixed top-50 start-50 translate-middle text-center">
                <h1>{finalResult}</h1>
                <AnswerButton answer={{text: "再玩一次", type: "restart"}} handleChoice={restart}/>
            </Container>
        </>
    );
}

export default Result;
