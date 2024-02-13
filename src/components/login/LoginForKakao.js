//style
import styled from "styled-components";

import { LinkItem, Logo } from "../../styles/Component";
import kakao  from "../../assets/img/icon/kakao.png"

const LoginForKakao = () => {
    const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3003/Callback&response_type=code`;

    const LoginHandler = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    
    return (
        <LinkItem onClick={LoginHandler}>
            <Logo src={kakao} />
        </LinkItem>
    ); 
};


export default LoginForKakao;