import { useState, useEffect } from "react";
import { CarListData } from "../../apis"

// styled & img
import styled from 'styled-components';
import Icon from "../../assets/img/icon/car-check-light.png";

// Component
import { FlexContent, ProviderText } from '../../styles/Component';
import RegistBtn from './RegistBtn';

const CarRateContent = () => {
    const ContentTitle = [
        "자동차 매매 건수", "자동차 등록 현황", "자동차 폐차 현황"
    ]

    
    useEffect(() => {
        const token = process.env.GG_API_KEY;

        const fetchData = async(token) => {
            // await CarListData(token);
        }

        fetchData();
    },[])


    return (
        <>
            <FlexContent $padding="2em 0 0 0" $justify="none">
                <InfoWrap>
                    <TitleText>
                        자동차 종합 집계
                    </TitleText>
                    <TextWrap>
                        한국교통안전공단<br />
                        자동차종합정보<br />
                        신규등록정보 서비스<br />
                        통계 정보
                    </TextWrap>
                </InfoWrap>

                {/* 자동차 api 디스플레이 */}
                <RateContainer>
                    {ContentTitle.map((item)=> {
                        return (
                            <RateBox key={item} >
                                <RateTitle>{item}</RateTitle>
                                <IconBox><IconImg src={Icon} /></IconBox>
                                <DataWrap>
                                    <NumText>1,243</NumText>
                                    <SubText>건</SubText>
                                </DataWrap>
                            </RateBox> 
                        )
                    })}
                </RateContainer>
            </FlexContent>
            <ProviderText>제공: 경기도 택시교통과</ProviderText>
            <RegistBtn />
        </>
    );
};

const InfoWrap = styled.div`
    display: grid;
    text-align: center;
    color: #464849;
`;

const TitleText = styled.span`
    font-size: 20px;
    padding-bottom: 2em;
    border-bottom:  thin solid #464849;
`;

const TextWrap = styled.p`
    font-weight: 300;
    margin: 2em 0;
    line-height: 2;
`;

const RateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

const RateBox = styled.div`
    width: 160px;
    height: 192px;
    margin: 0 2em;
`;

const RateTitle = styled.span`
    display : flex;
    justify-content : center;
    align-items : center;
	font-size: 18px;
    margin-bottom: 1em;
    font-weight: 350;
`;

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #9AF3FF;
    background-color: #E3FAFF;
    margin: auto;
`;

const IconImg = styled.img`
    width: 27px;
    height: 27px;
    margin: 10px 5px 10px 10px;
`;

const DataWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items: self-end;
    margin: 40px 0;
    color: #464849;
`;

const NumText = styled.span`
    font-weight: 400;
    font-size: 30px;
`;

const SubText = styled.span`
    font-size: 18px;
    font-weight: 350;
    margin: 0 5px 4px;
`

export default CarRateContent;