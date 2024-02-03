// style
import styled from "styled-components";

// component
import LoginForm from "./LoginForm";

const LoginContent = () => {
    return (
        <RightBar>
            {/* 상단 디자인 */}
            <TextBox>
                <Copy1>관리자 계정으로 로그인 해주세요.</Copy1>
                <Copy2>관리자 계정 승인은 매장에 문의해주세요.</Copy2>
            </TextBox>

            {/* 로그인 폼 */}
            <LoginForm />

            {/* 하단 회원가입 api 연동 */}
        </RightBar>
    );
};

export const RightBar = styled.div`
    display: -ms-flexbox;
    /* display: flex; */
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    margin: 0;
    padding: 0;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 12em 0 0 5em;
    color: #464849;
`;

export const Copy1 = styled.span`
    font-weight: 350;
    font-size: 1.6em;
    margin-bottom: 1em;
`

export const Copy2 = styled.p`
    font-weight: lighter;

`


export default LoginContent;