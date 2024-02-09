import StartPage from "./components/StartPage.tsx";
import styled from "styled-components";
import background from "@/assets/shared/background.svg";
import brand from "@/assets/shared/brand.webp";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

const Brand = styled.img`
    position: fixed;
    bottom: 10px;
    left: 50%;
    width: 50px;
    transform: translate(-50%, 0);
    border-radius: 50%;
    z-index: -1;
`;

function App() {
    return (
        <>
            <Background/>
            <StartPage/>
            <a href="https://d97642-3.myshopify.com/">
                <Brand src={brand} alt="brand"/>
            </a>
        </>
    )
}

export default App
