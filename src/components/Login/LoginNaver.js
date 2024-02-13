import { LinkItem, Logo } from "../../styles/Component";
import naver  from "../../assets/img/icon/naver.png"

const LoginNaver = () => {
    const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000/oauth"
    const STATE = "flase";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    return (
        <>
            <LinkItem>
                <Logo src={naver} onClick={NaverLogin} />
            </LinkItem>
        </>
    );
};

export default LoginNaver;