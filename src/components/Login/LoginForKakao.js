//style
import styled from "styled-components";

import { LinkItem } from "../../styles/Component";
import kakao  from "../../assets/img/icon/kakao.png"

const LoginForKakao = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=http://localhost:3003/Callback&response_type=code`;

    const LoginHandler = () => {
        window.location.href = link;
    }

    console.log(link)


    return (
        <LinkItem onClick={LoginHandler}>
            <Logo src={kakao} />
        </LinkItem>
    ); 
};

const Logo = styled.img`    
    display: block;
    width: 2em;
`

export default LoginForKakao;