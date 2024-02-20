import { useState } from "react";
import styled from "styled-components";
import closeIcon from "../../../assets/img/icon/close.png";

// component
import { carSubject } from "../../../assets/data";
import { BtnWrapper, CloseBtn } from "../../../styles/Component"

const DetailModal = ({ $display, handleClick, contents }) => {
    
    return (
        <ModalBg $display={$display}>
            <ModalWrap>
                <BtnWrapper>
                    <CloseBtn $img={closeIcon} onClick={handleClick}/>
                </BtnWrapper>
                <ContentsWrap>
                    { carSubject.map((item, index) => (
                        <InfoBox>
                            <InfoTitle key={index}>{item.name}</InfoTitle>
                            {
                                contents &&
                                contents.map((data, index) => (
                                    <InfoContent key={index}>{data}</InfoContent>
                                ))
                            }
                        </InfoBox>
                    ))}
                </ContentsWrap>
            </ModalWrap>
        </ModalBg>
    );
};  

const ModalBg = styled.div`
    position: fixed;
	background: ${props => props.$bgcolor || 'rgba(248, 254, 255, 0.2)'};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	min-width: 1080px;
	display: ${props => (props.$display === 'hidden' ? 'none' : 'block')};
    visibility: ${props => (props.$visibility === 'hidden' ? 'hidden' : 'visible')};
	z-index: 20;
`;

const ModalWrap = styled.div`
	position: absolute;
	background: #FAFEFF;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: ${props => props.min || '604px'};
	padding: ${props => props.$padding || '30px'};
	border-radius: 20px;
	min-height: 608px;
	overflow: auto;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const ContentsWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const InfoBox = styled.div`
    width: 480px;
    height: 55px;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    padding: 0 20px 10px;
    border-bottom: thin solid #8DBEC8;
`;

const InfoTitle = styled.span`
    color: #666666;
    font-weight: 400;
    font-size: 16px;
`;

const InfoContent = styled.span`
    color: #505050;
    font-weight: 300;
    font-size: 16px;
`;

export default DetailModal;