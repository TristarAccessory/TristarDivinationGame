import styled from "styled-components";

const ResultHeader = styled.h1`
    font-weight: 400;
    font-size: 2rem;
    font-style: normal;
    color: #d5b6ed;
    position: relative;
    z-index: 1;

    text-shadow: 1px 1px 0 #a080a0;
    margin-bottom: 2rem;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        color: white;
        text-shadow: 0 0 6px white,
        0 0 10px white,
        0 0 6px white;
        opacity: 0.5;
    }
`;

export default ResultHeader;
