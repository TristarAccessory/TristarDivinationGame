import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";

import ShareResult from "@/pages/ShareResult.tsx";
import Game from "@/pages/Game.tsx";

import background from "@/assets/shared/background.svg";
import saturn from "@/assets/startPage/saturn.svg";
import brand from "@/assets/shared/brand.webp";

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    z-index: -1;
`;

const Brand = styled.img`
    position: fixed;
    bottom: 5px;
    left: 50%;
    width: 50px;
    transform: translate(-50%, 0);
    border-radius: 50%;
    z-index: 0;
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

function App() {
    return (
        <Router basename="/TristarDivinationGame">
            <Background src={background} alt="background"/>
            <Saturn src={saturn} alt="saturn"/>
            <Routes>
                <Route path="/TristarDivinationGame" element={<Game/>}/>
                <Route path="/TristarDivinationGame/game" element={<Game/>}/>
                <Route path="*" element={<Game/>}/>
                <Route path="/TristarDivinationGame/share/:finalResult" element={<ShareResult/>}/>
            </Routes>
            <a href="https://d97642-3.myshopify.com/">
                <Brand src={brand} alt="brand"/>
            </a>
        </Router>
    );
}

export default App;
