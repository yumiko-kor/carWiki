//style
import styled from "styled-components";

import { LinkItem, Logo } from "../../styles/Component";
import kakao  from "../../assets/img/icon/kakao.png"

const LoginForKakao = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=http://localhost:3003/Callback&response_type=code`;

    const LoginHandler = () => {
        window.location.href = link;
    }
    
    return (
        <LinkItem onClick={LoginHandler}>
            <Logo src={kakao} />
        </LinkItem>
    ); 
};


export default LoginForKakao;