import {Container} from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    background-color: rgb(232, 202, 195, 0.65);
`;

const StyledText = styled.p`
    color: rgb(62, 70, 119);
    font-weight: bold;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const Description = ({luckDescription}: {
    luckDescription: string[],
}) => {
    return (
        <StyledContainer className="p-3 rounded text-start">
            {luckDescription.map((description, index) => (
                <StyledText key={index}>{description}</StyledText>
            ))}
        </StyledContainer>
    );
};

export default Description;
