import styled, {keyframes} from "styled-components";
import crystal from "@/assets/startPage/crystal.svg";
import saturn from "@/assets/startPage/saturn.svg";
import moon from "@/assets/startPage/moon.svg";
import card1 from "@/assets/startPage/card1.png";
import card2 from "@/assets/startPage/card2.png";
import card3 from "@/assets/startPage/card3.png";
import {Container, Stack} from "react-bootstrap";

const swing = keyframes`
    0% {
        transform: translateX(-50%) scaleY(-1) rotate(-5deg);
    }
    50% {
        transform: translateX(-50%) scaleY(-1) rotate(5deg);
    }
    100% {
        transform: translateX(-50%) scaleY(-1) rotate(-5deg);
    }
`;

const Crystal = styled.img`
    position: fixed;
    top: -175px;
    left: 50%;
    width: 150px;
    transform: translateX(-50%) scaleY(-1);
    transform-origin: bottom center;
    animation: ${swing} 5s ease-in-out infinite;
    z-index: -1;
`;


const Saturn = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    z-index: -1;
`;

const Moon1 = styled.img`
    position: fixed;
    bottom: 2%;
    left: 50px;
    width: 200px;
    transform: translate(-50%, 50%);
    opacity: 0.2;
    z-index: -1;
`;

const Moon2 = styled.img`
    position: fixed;
    bottom: 2%;
    left: calc(100% - 50px);
    width: 200px;
    transform: translate(-50%, 50%) scaleX(-1);
    opacity: 0.2;
    z-index: -1;
`;

const floatAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const flipAnimation = keyframes`
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(360deg);
    }
`;

const DivinationCard = styled.img`
    width: 85px;
    border-radius: 10px;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    &:hover, &:active {
        animation: ${flipAnimation} 0.5s forwards;
    }
`;

const GameTitle = styled.h1`
    color: rgb(128, 69, 125);
    font-size: 3.5rem;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 5rem;
    text-shadow: 2px 2px rgb(255, 255, 255),
    3px 3px rgb(255, 255, 255),
    4px 4px rgb(255, 255, 255);
`;

const GameSubTitle = styled.h2`
    color: rgb(243, 152, 0);
    font-size: 2rem;-
    font-weight: bolder;
`;

const StartPage = ({nextPage}: { nextPage: () => void }) => {
    return (
        <>
            <Crystal src={crystal} alt="cystal"/>
            <Saturn src={saturn} alt="saturn"/>
            <Moon1 src={moon} alt="moon"/>
            <Moon2 src={moon} alt="moon"/>
            <Container className="position-fixed top-50 start-50 translate-middle">
                <GameTitle>好運占卜</GameTitle>
                <Stack direction="horizontal" gap={4}
                       className="justify-content-center"
                >
                    <DivinationCard src={card1} alt="card1"
                                    onClick={nextPage}/>
                    <DivinationCard src={card2} alt="card2"
                                    onClick={nextPage}/>
                    <DivinationCard src={card3} alt="card3"
                                    onClick={nextPage}/>
                </Stack>
                <GameSubTitle className="text-center mt-5">2024 運勢及重點提示</GameSubTitle>
            </Container>
        </>
    );
}

export default StartPage;
