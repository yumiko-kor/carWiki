// 버튼 공통 컴포넌트 & CSS
import { useEffect, useState } from "react";

// style & img
import styled, { css } from "styled-components";
import infoIcon from "../../../assets/img/icon/search-s.png"

/**
 * @param {string} text 버튼 내부 텍스트
 * @param {string} type 버튼 타입 (button, submit)
 * @param {string} errorMessage 표시할 에러 메시지
 * @param {() => void} handleClick 버튼 클릭시 실행할 이벤트, Route 기능의 경우 history.push와 같은 함수를 이용합니다.
 * @param {string} buttonColor 버튼 배경 색상
 * @param {string} hoverColor 버튼 호버 배경 색상
 * @param {object} props 폰트 관련 속성
 */

/*
    props로 전달 받는 것들
    - text, type, disabled, handleClick, theme, size, width, height, bordercolor, name
*/

const Button = ({ display, text, type = "button", disabled, handleClick, theme, size, width, height, bordercolor, name }) => {
    return (
        <>
            <Wrapper width={width} display={display}>
                <ButtonStyle
                    onSubmit={e => e.preventDefault()}
                    type={type}
                    disabled={disabled}
                    handleClick={handleClick}
                    theme={theme}
                    size={size}
                    bordercolor={bordercolor}
                    width={width}
                    height={height}
                    name={name}>
                    {text}
                </ButtonStyle>
		</Wrapper>
        </>
    );
};

const Wrapper = styled.div`
	display: ${props => props.display || 'inline-block'};
	width: ${props => props.width};
	/* text-align: center; */
`;

const sizes = {
	large: {
		width: '100%',
		fontSize: '17px',
		padding: '16px 20px',
		fontWeight: '600',
		height: '50px',
	},
};

const sizeStyles = css`
	${({ size }) => css`
		width: ${sizes[size].width};
		font-size: ${sizes[size].fontSize};
		border-radius: ${sizes[size].borderRadius};
		padding: ${sizes[size].$padding};
		font-weight: ${sizes[size].fontWeight};
		height: ${sizes[size].height};
	`}
`;

const ButtonStyle = styled.button`
	border-radius: 10px;
	display: inline-block;
	align-items: center;
	justify-content: center;
	width: ${props => props.width || '138px'};
	height: ${props => props.height || '48px'};
	min-width: fit-content;
	color: #fff;
	font-size: 16px;
	${props => props.size && sizeStyles}
    
    // 취소 버튼
	${props =>
		props.theme === 'cancel' &&
		css`
			border: 1px	 solid #54B6CB;
			background: transparent;
			color: #54B6CB;
		`}

	// 등록 버튼
    ${props =>
		props.theme === 'register' &&
		css`
			background: #66C3D7;
			color: #fff;
	`}

	// 검색 버튼
	${props =>
		props.theme === 'search' &&
		css`
			width: 115px;
			height: 35px;
			border-radius: 4px;
			font-weight: 350	;
			background-color: rgba(205, 251, 251, 0.11);
			border: 1px	 solid #54B6CB;
			color: #54B6CB;
	`}

    // 엑셀 버튼
    ${props =>
		props.theme === 'export' &&
		css`
			width: 132px;
			height: 41px;
			background: #54B6CB;
			color: #fff;
	`}

	// 사용 불가
	${props =>
	props.theme === 'disable' &&
	css`
		background: #d9d9d9;
		color: #fff;
	`}

    // 상세보기 버튼
    ${props =>
		props.theme === 'moreInfo' &&
		css`
			border: 1px solid ${props.bordercolor};
			background: url(${infoIcon}) 50% 50% no-repeat;
			border: 1px solid #d9d9d9;
			width: 35px;
			height: 35px;
		`}

    // 로그인 버튼
    ${props =>
		props.theme === 'login' &&
		css`
            background-image: linear-gradient(90deg, #58D6F0, rgba(34, 207, 186, 0.3));
            background-size: cover;
			color: #fff;
			width: 263px;
			height: 58px;
            border-radius: 50px;
		`}
`;

export default Button;