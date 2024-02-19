import styled, { css } from "styled-components";
import arrow from "../assets/img/icon/down-arrow-blue.png"

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
	margin: 0;
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
    align-items: center;
    justify-content:${props => props.$justify || 'space-between'};
    padding: ${props => props.$padding};
    border-bottom: ${props => props.$bottomline || "none"};
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

export const SelectBox = styled.select`
    width: 150px;
    height: 35px;
    font-size: 15px;
    padding: 5px 30px 5px 10px;
    border: solid thin #54B6CB;
    outline: 0 none;
    margin-right: 10px;
    color: #1EA1CA;
    background: url(${arrow}) calc(100% - 5px) center no-repeat;
    background-size: 13px;
`;

// table
export const TableStyle = styled.table`
	font-size: 13px;
	color: #464849;
;
	position: relative;
	&:before {
		content: '';
		width: 100%;
		height: 1px;
		background: rgba(164, 228, 242, 0.19);
		display: block;
		top: 0;
		position: absolute;
		left: 0;
	}
	tr:last-child {
		border-bottom: 1px solid rgba(164, 228, 242, 0.19);
	}
	th,
	td {
		border-top: 1px solid rgba(164, 228, 242, 0.19);
		border-left: 1px solid rgba(164, 228, 242, 0.19);
		letter-spacing: 0;
		vertical-align: middle;
		padding: 5px 10px;
		line-height: 1.4;
		border-radius: 10px;
	}
	th:last-child,
	td:last-child {
		border-right: 1px solid rgba(164, 228, 242, 0.19);
	}
	th {
		height: 56px;
		background: #FFFFFF;
		text-align: center;
		font-weight: 350;
		font-size: 13px;
	}
	td {
		text-align: center;
		height: 56px;
		word-break: break-all;
		font-weight: 350;
		background: #FFFFFF;
	}
	button {
		font-size: 13px;
		width: 52px;
		min-width: max-content;
		padding: 0 10px;
		height: 24px;
	}
	tr.table-line {
		th,
		td {
			border-top: 1px solid rgba(164, 228, 242, 0.19);
		}
	}
	input[type='checkbox'] ~ label {
		padding-left: 0;
		&:before {
			position: relative;
			transform: translate(0, 0);
		}
	}
`;

export const TableWrapper = styled.div`
`;