import styled, { css } from "styled-components";

// input & textArea
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: ${props => props.$margin || 0};
`;

export const TextInput = styled.input`
	border: 1px solid #e0e0e0;
	border-radius: 15px;
	width: ${props => props.width || '100%'};
	padding: ${props => props.$padding || '5px 15px'};
	line-height: 18px;
	font-size: ${props => props.fontSize || '14px'};
	&::placeholder {
		color: #B1B1B1;
	}
	&:disabled {
		color: #cccccc;
		background: #f6f6f6;
	}
	&:focus {
		border: 2px solid #72E6FF;
	}
`