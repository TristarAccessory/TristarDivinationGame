import {Container, Stack} from "react-bootstrap";
import styled from "styled-components";
import diamond from "@/assets/shared/diamond.webp";

const ParseResultContainer = styled(Container)`
    background-color: rgb(230, 158, 142);
    border-radius: 20px;
    color: rgb(62, 70, 119);
    font-weight: bold;
    padding: 4px 6px;
`;

const DiamondIcon = styled.img`
    width: 15px;
    height: 15px;
`;

const ParseResult = ({luckResult}: { luckResult: { [key: string]: number } }) => {
    return (
        <Stack gap={3}>
            {Object.keys(luckResult).map((key, index) =>
                <ParseResultContainer key={index}>
                    <span>{key}:</span>
                    <span className="ms-1">
                        {Array.from({length: luckResult[key]}, (_, index) =>
                            <DiamondIcon key={index} src={diamond} alt="diamond"/>
                        )}
                    </span>
                </ParseResultContainer>
            )}
        </Stack>
    );
}

export default ParseResult;
