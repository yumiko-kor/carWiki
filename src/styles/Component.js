import styled, { css } from "styled-components";

// input & textArea
export const Container = styled.div`
    display: flex;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: ${props => props.$margin || 0};
`;

export const TextInput = styled.input`
	border: 1px solid #e0e0e0;
	border-radius: ${props => props.radius || '15px'};
	width: ${props => props.width || '100%'};
	padding: ${props => props.$padding || '5px 15px'};
	line-height: 18px;
	font-size: ${props => props.fontSize || '14px'};
	font-weight: ${props => props.fontWeight || 'lighter'};
	&::placeholder {
		color: #B1B1B1;
	}
	&:disabled {
		color: #cccccc;
		background: #f6f6f6;
	}
	&:focus {
		border: ${props => props.border || "2px solid #72E6FF"};
	}
`

export const LinkItem = styled.a`
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    background: transparent;
    padding: 15px;
    padding-top: 0px;
    padding-bottom: 7px;
`;

export const Logo = styled.img`    
    display: block;
    width: ${props => props.width || "2em"};
`;

export const FlexContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextS = styled.span`
	line-height: 18px;
    padding: ${props => props.$padding || "0"};
    color: ${props => props.color || "#464849"};
	font-size: ${props => props.fontSize || '14px'};
	font-weight: ${props => props.fontWeight || '350'};
    text-decoration: ${props => props.$underline || `none`};
`;