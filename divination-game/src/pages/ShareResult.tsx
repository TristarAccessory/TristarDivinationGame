import {useNavigate, useSearchParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {useEffect} from "react";

const ShareResult = () => {
    const [finalResult] = useSearchParams();
    const result = finalResult.get("finalResult");
    const navigate = useNavigate();

    useEffect(() => {
        if (!result) {
            navigate("/");
        }
    }, [result, navigate]);

    return (
        <Container className="position-fixed top-50 start-50 translate-middle">
            <h1>,Your result is:</h1>
            <h2>{result}</h2>
            <p>Well done! You are a true space expert!</p>
            <a href="https://d97642-3.myshopify.com/">Shop now</a>
        </Container>
    );
}

export default ShareResult;
