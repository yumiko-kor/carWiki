import styled, { css } from "styled-components";

// input & textArea
export const Container = styled.div`
	background: url(${props => props.$bgimg}) 50% 50%;
	background-size: cover;
	/* min-height: 100vh;
	height: 100%; */
	padding: ${props => props.$padding || 0};
	display: ${props => props.type || "flex"};
	${props => {
		if (props.type) {
			return `
        align-items:${props.$align || 'flex-start'};
        justify-content:${props.$justify || 'flex-start'};
    `}}}
    flex-direction: ${props => props.direction || "none"};
`;

export const ContentContainer = styled.div`
	min-height: 89vh;
	width: 100%;
	padding: 55px 60px;
	background: rgba(178, 221, 227, 0.07);
`;

export const FullContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	max-width: calc(100% - 280px);
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
	font-weight: ${props => props.fontWeight || '350'};
	&::placeholder {
		color: #B1B1B1;
	}
	&:disabled {
		color: #cccccc;
		background: #ffffff;
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

export const Icon = styled.img`
    display: block;
    margin: ${props => props.margin || "auto"};
    width: ${props => props.width || "25px"};
    height: ${props => props.height || "25px"};
`;

export const HeaderContainer = styled.header`
    background: #ffffff;
    width: 100%;
    height: 112px;
	padding: 3em;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	word-break: break-all;
	justify-content: space-between;
	align-items: center;
`;

export const FlexContent = styled.div`
    display: flex;
    justify-content:${props => props.$justify || 'space-between'};
    padding: ${props => props.$padding};
`;

export const TextS = styled.span`
    display : flex;
    justify-content : center;
    align-items : center;
	line-height: 18px;
    padding: ${props => props.$padding || "0"};
    color: ${props => props.color || "#464849"};
	font-size: ${props => props.fontSize || '14px'};
	font-weight: ${props => props.fontWeight || '350'};
    text-decoration: ${props => props.$underline || `none`};
`;

export const TitleText = styled.span`
	line-height: 18px;
    color: ${props => props.color || "#464849"};
    font-size: ${props => props.fontSize || '20px'};
	font-weight: ${props => props.fontWeight || '350'};
    border-bottom: ${props => props.boderLine || "none"};
`;

export const InfoText = styled.span`
    color: ${props => props.color || "#464849"};
    font-size: ${props => props.fontSize || '16px'};
	font-weight: ${props => props.fontWeight || '350'};
`;

export const ProviderText = styled.div`
    display: flex;
    justify-content: right;
    font-size: 12px;
    margin: 0 15px;
`;