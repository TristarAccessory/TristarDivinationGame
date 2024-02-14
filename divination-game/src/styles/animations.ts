import {keyframes} from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const floatAnimation = keyframes`
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

export const flipAnimation = keyframes`
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(360deg);
    }
`;

export const swingUpsideDown = keyframes`
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

export const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
