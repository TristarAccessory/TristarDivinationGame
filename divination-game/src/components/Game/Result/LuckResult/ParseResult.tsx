import {Container, Stack} from "react-bootstrap";
import styled from "styled-components";
import diamond from "@/assets/shared/diamond.webp";
import diamondHalf from "@/assets/shared/diamondHalf.webp";

const ParseResultContainer = styled(Container)`
    background-color: rgb(230, 158, 142);
    border-radius: 20px;
    color: rgb(62, 70, 119);
    font-weight: bold;
    padding: 4px 6px;
    display: flex;
    align-items: center;
`;

const DiamondIcon = styled.img`
    width: 15px;
    height: 15px;
`;

const DiamondHalfIcon = styled.img`
    width: 8px;
    height: 15px;
`;

const ParseResult = ({luckResult}: { luckResult: { [key: string]: number } }) => {
    return (
        <Stack gap={3}>
            {Object.keys(luckResult).map((key) => {
                const fullStars = Math.floor(luckResult[key]);
                const hasHalfStar = luckResult[key] % 1 === 0.5;
                return (
                    <ParseResultContainer key={key}>
                        <span>{key}:</span>
                        <span className="ms-1">
                            {Array.from({length: fullStars}, (_, index) => (
                                <DiamondIcon key={index} src={diamond} alt="diamond"/>
                            ))}
                            {hasHalfStar && <DiamondHalfIcon src={diamondHalf} alt="half diamond"/>}
                        </span>
                    </ParseResultContainer>
                );
            })}
        </Stack>
    );
}

export default ParseResult;
