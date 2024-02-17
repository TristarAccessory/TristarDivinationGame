import {useNavigate, useSearchParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {useEffect} from "react";
import Result from "#/Shared/Result.tsx";

const ShareResult = () => {
    const [finalResult] = useSearchParams();
    const result = finalResult.get("finalResult") ?? "";
    const navigate = useNavigate();

    useEffect(() => {
        if (!result) {
            navigate("/");
        }
    }, [result, navigate]);

    return (
        <Container className="position-fixed top-50 start-50 translate-middle">
            <Result finalResult={result} restart={() => void 0} isShared={true}/>
        </Container>
    );
}

export default ShareResult;
