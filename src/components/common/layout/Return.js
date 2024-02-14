import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import styled from "styled-components";
import CarwikiLogo from "../../../assets/img/icon/CarWiki.png"

const Return = () => {
    const navigate = useNavigate();

    const handleRetun = () => {
        setTimeout(()=>{
            navigate('./')
        }, 2000);
    }
    
    useEffect(() => {
        !sessionStorage.getItem("token") && handleRetun();
    })

    return (
        <FullContent> 
            <LogoBox src={CarwikiLogo} />
            <GuideText>
                로그인 후 이용해주세요. <br />
                잠시 후 로그인 페이지로 이동합니다.
            </GuideText>
        </FullContent>
    );
};

const FullContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(178, 221, 227, 0.07);
`;

const LogoBox = styled.img`
    width: 150px;
`

const GuideText = styled.div`
    margin-top: 2em;
    text-align: center;
    font-size: 20px;
    font-weight: 340;
    line-height: 2em;
    color: #89CAD8;
`;

export default Return