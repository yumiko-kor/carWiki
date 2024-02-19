import { Fragment } from "react";

// component
import CarSearchBar from "./CarSearchBar";
import { CarList } from "../../assets/data";
import Button from "../common/button/Button";
import { TableWrapper, TableStyle } from "../../styles/Component";

// 스타일
import styled from "styled-components";
import InfoIcon from "../../assets/img/icon/search-s.png";

const CarViewTable = () => {
    const dataList = CarList;

    return (
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
                            <th width="3%">차명코드</th>
                            <th width="3%">배기량 코드</th>
                            <th width="10%">모델년도</th>
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
                                        <td>{data.vhctyAsortCode}</td>
                                        <td>{data.cnmCode}</td>
                                        <td>{data.dsplvlCode}</td>
                                        <td>{data.prye}</td>
                                        <td>{data.sexdstn}</td>
                                        <td>{data.agrde}</td>
                                        <td><Icon $bgimg={InfoIcon} /></td>
                                    </tr>
                                </Fragment>
                            ))
                        }
                    </tbody>
                </TableStyle>
            </TableWrapper>
        </Container>
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