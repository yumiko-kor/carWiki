// style
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
// import { Container } from "../../../styles/components";
import LogoIcon from "../../../assets/img/icon/CarWiki.png"
import BgImg from "../../../assets/img/bg/loginBg.png"

const LoginLayout = () => {
    return (
        <Container >

            <LeftBar>
                <Logo src={LogoIcon} alr="carwiki" />
                <TextBox>
                    <Line1>자동차 관리 업체를 위한</Line1>
                    <Line2>차량 관리 통합 서비스</Line2>
                </TextBox>
                <Bg />
            </LeftBar>

                테스트중 서버
            
            <RightBar>



            </RightBar>

        </Container>
    );
};

export const Container = styled.div`
    display: flex;
`;

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
    width: 150px;
    height: 38px;
    margin: 4em;
`;

export const Bg = styled.div`
    display: block;
    background: url(${BgImg}) 150% no-repeat;
    width: 80%;
    max-width: 561px;
    height: 500px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 0 6em 0;
`;

export const Line1 = styled.span`
    font-size: 1.8em;
    padding-bottom: 30px;
    color: #80C9D9;
`;

export const Line2 = styled.span`
    font-size: 2em;
    color: #47C3DE;

`;

export const RightBar = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;



export default LoginLayout;