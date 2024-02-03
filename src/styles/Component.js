import styled, { css } from "styled-components";

// input & textArea
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: ${props => props.$margin || 0};
`;