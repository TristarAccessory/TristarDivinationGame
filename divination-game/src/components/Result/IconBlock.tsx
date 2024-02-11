import redBag from "@/assets/result/iconBlock/redBag.svg";
import goodLuck from "@/assets/result/iconBlock/goodLuck.svg";
import styled from "styled-components";

const IconContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const IconWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const Icon = styled.img`
    background-color: rgb(230, 158, 142);
    padding: 10px;
    outline: 8px solid rgb(161, 107, 159);
    border-radius: 10%;
    width: 112px;
    height: 112px;
    margin-top: 8px;
`;

const TopRightContainer = styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

const TopRightIcon = styled.img`
    width: 100%;
    height: auto;
    z-index: 1;
`;

const OutputText = styled.div`
    position: absolute;
    color: rgb(255, 219, 83);
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    top: 65%;
    left: 50%;
    z-index: 3;
    text-shadow: 1px 1px black;
`;

const IconBlock = ({finalResult}: { finalResult: string }) => {
    const outputText = finalResult.split("X")[1];
    return (
        <IconContainer>
            <IconWrapper>
                <Icon src={goodLuck} alt="good luck"/>
                <TopRightContainer>
                    <TopRightIcon src={redBag} alt="red bag"/>
                    <OutputText>{outputText}</OutputText>
                </TopRightContainer>
            </IconWrapper>
        </IconContainer>
    );
};

export default IconBlock;
