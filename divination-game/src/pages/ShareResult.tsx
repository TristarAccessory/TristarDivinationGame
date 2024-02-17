import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const ShareResult = () => {
    const {finalResult} = useParams();

    return (
        <Container className="position-fixed top-50 start-50 translate-middle">
            <h1>Your result is:</h1>
            <h2>{finalResult}</h2>
            <p>Well done! You are a true space expert!</p>
            <a href="https://d97642-3.myshopify.com/">Shop now</a>
        </Container>
    );
}

export default ShareResult;
