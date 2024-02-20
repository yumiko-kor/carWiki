import { Fragment, useState } from "react";

// 스타일
import styled from "styled-components";
import InfoIcon from "../../assets/img/icon/search-s.png";
import closeIcon from "../../assets/img/icon/close.png";

// component
import { TableWrapper, TableStyle, BtnWrapper, CloseBtn } from "../../styles/Component";
import CarSearchBar from "./CarSearchBar";
import Button from "../common/button/Button";
import DetailModal from "../common/modal/DetailModal";
import { CarList, locationLabel, dspvlCodeLabel, vhctyAsortCodeLabel, carSubject } from "../../assets/data";

const CarViewTable = () => {
    const [ detail, setDetail ] = useState([]);
    const [ detailModal, setDetailModal ] = useState("hidden");
    const [ detailArray, setDetailArray ] = useState([]);
    const dataList = CarList;

    // 모달
    const handleModal = () => {
        if(detailModal === "hidden") {
            setDetailModal("view")
        } else {
            setDetailModal("hidden");
        }
    }

    // 상세 데이터 저장
    const handleDetail = (e, data) => {
        e.preventDefault();

        dataList.map((item) => (
            (item.no === data) && setDetail(item)
        ))

        handleModal();
    }

    locationLabel.map((data) => {
        console.log("locationLabel: ", data.value);
    })


    console.log("상세 정보 : " , detail, Object.entries(detail));

    const convertDetail = () => {
        let list = [];

        list.push(Object.entries(detail))
        setDetailArray(list);
    }

    console.log("변환 데이터 ", detailArray)

    return (
        <>
            <Container>
                <CarSearchBar />
                {/* 엑셀 export Btn */}
                <BtnBox>
                    <Button theme="export" text="Exel Export" />
                </BtnBox>
                {/* 테이블구역 */}
                <TableWrapper>
                    <TableStyle>
                        <thead>
                            <tr>
                                <th width="3%">no</th>
                                <th width="3%">차종코드</th>
                                <th width="5%">차명코드</th>
                                <th width="10%">배기량 코드</th>
                                <th width="5%">모델년도</th>
                                <th width="3%">성별</th>
                                <th width="5%">연령대</th>
                                <th width="3%">상세보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataList.map((data, index) => (
                                    <Fragment key={index}>
                                        <tr>
                                            <td>{data.no}</td>
                                            {vhctyAsortCodeLabel.map((item) => { 
                                                return(
                                                data.vhctyAsortCode === item.value &&
                                                <td>{item.name}</td>)
                                            })}
                                            <td>{data.cnmCode}</td>
                                            {dspvlCodeLabel.map((item) => { 
                                                return(
                                                data.dsplvlCode === item.value &&
                                                <td>{item.name}</td>)
                                            })}
                                            <td>{data.prye}년</td>
                                            <td>{data.sexdstn === 1 ? "여성" : "남성"}</td>
                                            <td>{data.agrde}0대</td>
                                            <td><Icon $img={InfoIcon} onClick={e => handleDetail(e, data.no)} /></td>
                                        </tr>
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </TableStyle>
                </TableWrapper>
            </Container>

            {/* 모달 */}
            <ModalBg $display={detailModal}>
                <ModalWrap>
                    <BtnWrapper>
                        <CloseBtn $img={closeIcon} onClick={handleModal}/>
                    </BtnWrapper>
                    <ContentsWrap>
                        { 
                            Object.entries(detail).map((data, index) => (
                            <InfoBox>
                                <InfoTitle key={index}>{data}</InfoTitle>
                                    <InfoContent>{data[1]}</InfoContent>
                            </InfoBox>
                        ))}
                    </ContentsWrap>
                </ModalWrap>
            </ModalBg>
        </>
    );
};

const Container = styled.div`
    margin: auto;
`;

const Icon = styled.button`
    display: block;
    margin: auto;
    background: url(${props => props.$img}) 50% 50% no-repeat;
`;

const BtnBox = styled.div`
    margin-bottom: 15px;
`;

// modal
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
    justify-content: space-between;
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



export default CarViewTable;