import { Fragment, useState } from "react";

// 스타일
import styled from "styled-components";
import InfoIcon from "../../assets/img/icon/search-s.png";

// component
import { TableWrapper, TableStyle } from "../../styles/Component";
import CarSearchBar from "./CarSearchBar";
import Button from "../common/button/Button";
import DetailModal from "../common/modal/DetailModal";
import { CarList, locationLabel, dspvlCodeLabel, vhctyAsortCodeLabel } from "../../assets/data";

const CarViewTable = () => {
    const [ detail, setDetail ] = useState([]);
    const [ detailModal, setDetailModal ] = useState("hidden");
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

        handleModal()
    }

    locationLabel.map((data) => {
        console.log("locationLabel: ", data.value);
    })


    console.log("상세 정보 : " , detail);

    detail && 
    locationLabel.map((item) => {
        (detail.registGrcCode === item.value) && console.log(item.name)
    })

    return (
        <>
            <Container>
                <CarSearchBar />
                {/* 엑셀 export Btn */}
                <BtnWrapper>
                    <Button theme="export" text="Exel Export" />
                </BtnWrapper>
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
                                            <td>{data.prye}</td>
                                            <td>{data.sexdstn >= 2 ? "남성" : "여성"}</td>
                                            <td>{data.agrde}0대</td>
                                            <td><Icon $bgimg={InfoIcon} onClick={e => handleDetail(e, data.no)} /></td>
                                        </tr>
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </TableStyle>
                </TableWrapper>
            </Container>

            {/* 모달 */}
            <DetailModal $display={detailModal} >

            </DetailModal>
        </>
    );
};

const Container = styled.div`
    margin: auto;
`;

const Icon = styled.button`
    display: block;
    margin: auto;
    background: url(${props => props.$bgimg}) 50% 50% no-repeat;
`;

const BtnWrapper = styled.div`
    margin-bottom: 15px;
`;

export default CarViewTable;