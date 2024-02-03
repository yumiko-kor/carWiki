import styled from "styled-components";

// img
import LogoIcon from "../../assets/img/icon/CarWiki.png"
import BgImg from "../../assets/img/bg/loginBg.png"

// component
import { TextBox } from "../../styles/Component";

const LoginMain = () => {
    return (
        <LeftBar>
            <Logo src={LogoIcon} alr="carwiki" />
            <TextBox $margin="0 6em 0" >
                <Line1>자동차 관리 업체를 위한</Line1>
                <Line2>차량 관리 통합 서비스</Line2>
            </TextBox>
            <Bg />
        </LeftBar>
    );
};

export const LeftBar = styled.section`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-image: linear-gradient(180deg, #FAFDFD, #DBF3F8);
    background-size: cover;
	min-height: 100vh;
    min-width: 50%;
    max-width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const Logo = styled.img`
    display: block;
    width: 147px;
    height: 35px;
    margin: 3em;
`;

export const Bg = styled.div`
    display: block;
    background: url(${BgImg}) 180% no-repeat;
    width: 80%;
    max-width: 530px;
    height: 500px;
`;

export const Line1 = styled.span`
    font-size: 1.8em;
    padding-bottom: 30px;
    color: #80C9D9;
    font-weight: lighter;
`;

export const Line2 = styled.span`
    font-size: 2em;
    color: #47C3DE;
    font-weight: 300;
    text-decoration: underline;
`;

export default LoginMain;