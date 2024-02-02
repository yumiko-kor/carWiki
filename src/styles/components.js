import styled, { css } from "styled-components";


// 본문 내용
export const Container = styled.div`
    background: url(${props => props.$bgimg}) 50% 50%;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
    padding: ${props => props.$padding || 0};
    display: ${props => props.type};
    ${props => {
        if (props.type) {
            return `
        align-items:${props.$align || 'flex-start'};
        justify-content:${props.$justify || 'flex-start'};
    `;
        }
    }}
`;

// 헤더

// 네비

// 버튼

// 폰트

// input & textArea