
import { useRef } from "react";

// component
import styled from "styled-components";
import { LinkItem, Logo } from "../../styles/Component";
import google  from "../../assets/img/icon/google.png"

// google Login API
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UseScript from "../../hooks/UseScript";


const LoginForGoogle = () => {
    const CLIENT_ID = `${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}`;
    
    UseScript('https://accounts.google.com/gsi/client', () => {
        window.google.accounts.id.initialize({
            client_id: CLIENT_ID
        });
        window.google.accounts.id.renderButton({
            display: 'none',
            visibility: 'hidden',
        });
    });
    
    function onClickGooglelogin() {
        document.querySelector('[aria-labelledby="button-label"]').click();
    }

    return (
        <>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <LinkItem>
                    <Logo id="google-login-api" src={google} onClick={onClickGooglelogin} />
                    <LoginWrap>
                        <GoogleLogin
                            clientId={CLIENT_ID}
                            onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            // 해당 부분은 후에 들어오는 토큰에 대해서 디코딩 하는 부분이다. 
                            // const decodeding = jwt_decode(credentialResponse.credential);
                                console.log("success")
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            style={{ 
                                display:"none"
                            }}
                        />  
                    </LoginWrap>
                </LinkItem>
            </GoogleOAuthProvider>
        </>
    );
};

const LoginWrap = styled.div`
    display: none;
`;

export default LoginForGoogle;