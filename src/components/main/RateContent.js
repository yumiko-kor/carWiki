import Axios from "axios";
import { useState, useEffect } from "react";

//component
import { FlexContent, TitleText } from "../../styles/Component"; 

// style & img
import styled from "styled-components";
import { Dollar, Yen, Euro } from "../../assets/img/icon/RateIcon";

const RateContent = () => {
    const [ rate, setRate ] = useState([]);

    const CalDate = () => {
        const today = new Date();

        let year = today.getFullYear();
        let month = ("0" + (1 + today.getMonth())).slice(-2);
        let date = ("0" + today.getDate()).slice(-2);

        return year + month + date;
    }

    console.log(CalDate())

    const CLIENT_ID = process.env.REACT_APP_RATE_KEY;
    const SEARCH_DATE = CalDate();
    const RATE_URL =  `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${CLIENT_ID}&searchdate=${SEARCH_DATE}&data=AP01`;




    useEffect(() => {
        const fetchData = async(SEARCH_DATE) => {
            try {
                const res = await Axios.get(
                    // statusCode: 200,
                    `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=kJIALRKmjmpzfSgvk9AHcU6Hb5xh3FjY&searchdate=202402110&data=AP01`
                    )
            
                setRate(res);

                console.log("성공결과", rate);

                return res;
            } catch(e) { 
                console.log("오류 결과: ",e);

            }
        }

        fetchData();
    });

    console.log(rate);


    return (
        <ContentWrap>
            <TitleText>은행 고시 환율</TitleText>
            <FlexContent $padding="2em 0">
                {/* 달러 */}
                <RateBox $bgcolor="linear-gradient(90deg, #67E4FF, rgba(157, 229, 254, 0.39))" >
                    <TitleBox>
                        <InfoText>미국 / USD</InfoText>
                        <Icon src={Dollar} />
                    </TitleBox>
                    <RateText>1660.0</RateText>
                    <DetailBox>
                        <UpdateText>-3.00</UpdateText>
                    </DetailBox>
                </RateBox>
                {/* 일본 */}
                <RateBox $bgcolor="linear-gradient(90deg, #7E73FF, rgba(251, 209, 255, 0.39))" >
                    <TitleBox>
                        <InfoText>미국 / USD</InfoText>
                        <Icon src={Yen} />
                    </TitleBox>
                    <RateText>1660.0</RateText>
                    <DetailBox>
                        <UpdateText>-3.00</UpdateText>
                    </DetailBox>
                </RateBox>
                {/* 유로 */}
                <RateBox $bgcolor="linear-gradient(90deg, #74A0F9, rgba(60, 255, 232, 0.12))" >
                    <TitleBox>
                        <InfoText>유로 / Euro</InfoText>
                        <Icon src={Euro} />
                    </TitleBox>
                    <RateText>1660.0</RateText>
                    <DetailBox>
                        <UpdateText>-3.00</UpdateText>
                    </DetailBox>
                </RateBox>
            </FlexContent>
        </ContentWrap>
    );
};

const ContentWrap = styled.div`
    margin: 2em 0;
`;

const RateBox = styled.div`
    width: 289px;
    height: 188px;
    padding: 2em;
    border-radius: 25px;
    background: ${props => props.$bgcolor};
`;

const InfoText = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: ${props => props.fontSize || '20px'};
`;

const Icon = styled.img`
    width: 45px;
    height: 45px;
    margin: 0;
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RateText = styled.div`
    margin: 0.7em 0;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

const DetailBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UpdateText = styled.span`
    color: #fff;
    font-weight: 350;
    font-size: 15px;
`;

export default RateContent;