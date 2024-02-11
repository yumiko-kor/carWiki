import Axios from "axios";
import { useState, useEffect } from "react";

//component
import { FlexContent, TitleText, TextS } from "../../styles/Component"; 

// style & img
import styled from "styled-components";
import { Dollar, Yen, Euro } from "../../assets/img/icon/RateIcon";

const RateContent = () => {
    const [ rate, setRate ] = useState("");
    const [ rateValue, setRateValue ] = useState([]);

    const CalDate = () => {
        const today = new Date();

        let year = today.getFullYear();
        let month = ("0" + (1 + today.getMonth())).slice(-2);
        let date = ("0" + today.getDate()).slice(-2);

        return year + month + date;
    }

    const RATE_URL =  `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD,FRX.KRWJPY,FRX.KRWEUR`;

    // TODO API 따로 빼야합니다.
    useEffect(() => {
        const fetchData = async(SEARCH_DATE) => {
            try {
                const res = await Axios.get(
                    RATE_URL
                )
            
                setRate(res.data);

                console.log("성공결과", res.data);

                setRateValue({
                    usd: res.data && res.data[0].basePrice,
                    usdRate: res.data && String(res.data[0].signedChangeRate).substring(0,5),
                    jpy: res.data && res.data[1].basePrice,
                    jpyRate: res.data && String(res.data[1].signedChangeRate).substring(0,5),
                    eur: res.data && res.data[2].basePrice,
                    eurRate: res.data && String(res.data[2].signedChangeRate).substring(0,5),
                })

                return res;
            } catch(e) { 
                console.log("오류 결과: ",e);
            }
        }

        fetchData();
    }, []);

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
                    <RateText>{rateValue && rateValue.usd}</RateText>
                    <DetailBox>
                        <UpdateText>{rateValue && rateValue.usdRate}</UpdateText>
                    </DetailBox>
                </RateBox>
                {/* 일본 */}
                <RateBox $bgcolor="linear-gradient(90deg, #7E73FF, rgba(251, 209, 255, 0.39))" >
                    <TitleBox>
                        <InfoText>엔화 / JPY</InfoText>
                        <Icon src={Yen} />
                    </TitleBox>
                    <RateText>{rateValue && rateValue.jpy}</RateText>
                    <DetailBox>
                        <UpdateText>-{rateValue && rateValue.jpyRate}</UpdateText>
                    </DetailBox>
                </RateBox>
                {/* 유로 */}
                <RateBox $bgcolor="linear-gradient(90deg, #74A0F9, rgba(60, 255, 232, 0.12))" >
                    <TitleBox>
                        <InfoText>유로 / EUR</InfoText>
                        <Icon src={Euro} />
                    </TitleBox>
                    <RateText>{rateValue && rateValue.eur}</RateText>
                    <DetailBox>
                        <UpdateText>{rateValue && rateValue.eurRate}</UpdateText>
                    </DetailBox>
                </RateBox>
            </FlexContent>
            <ProviderText>제공: 하나은행</ProviderText>
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

const ProviderText = styled.div`
    display: flex;
    justify-content: right;
    font-size: 12px;
    margin: 0 15px;
`;

export default RateContent;