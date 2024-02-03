//style
import styled from "styled-components";

//img
import kakao  from "../../assets/img/icon/kakao.png"
import google from "../../assets/img/icon/google.png"
import naver from "../../assets/img/icon/naver.png"

const RegistAccount = () => {
    return (
        <>
            <ContentWrapper>
                <InfoText>Create Account with</InfoText>
                <ImgBox>
                    <LinkItem>
                        <Logo src={kakao} />
                    </LinkItem>
                    <LinkItem>
                        <Logo src={google} />
                    </LinkItem>
                    <LinkItem>
                        <Logo src={naver} />
                    </LinkItem>
                </ImgBox>
            </ContentWrapper>
        </>
    );
};

const ContentWrapper = styled.div`
    display: flex;
    width: 60%;
    margin: 5em auto auto 12em;
`;

const InfoText = styled.span`
    margin: auto;
    margin-right: 5px;
    color: #B6B6B6;
`;

const ImgBox = styled.div`
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const LinkItem = styled.a`
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    background: transparent;
    padding: 15px;
    padding-top: 0px;
    padding-bottom: 7px;
`;

const Logo = styled.img`
    display: block;
    width: 2em;
`


export default RegistAccount;