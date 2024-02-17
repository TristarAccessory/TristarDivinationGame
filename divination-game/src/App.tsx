import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";

import ShareResult from "@/pages/ShareResult.tsx";
import Game from "@/pages/Game.tsx";

import background from "@/assets/shared/background.svg";
import saturn from "@/assets/startPage/saturn.svg";

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
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

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Background src={background} alt="background"/>
            <Saturn src={saturn} alt="saturn"/>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="*" element={<Game/>}/>
                <Route path="/share" element={<ShareResult/>}/>
            </Routes>
        </Router>
    );
}

export default App;
