import ReactPaginate from "react-paginate";

// style & img
import styled from "styled-components";
import arrowIcon from "../../../assets/img/icon/next.png"
import fullIcon from "../../../assets/img/icon/angle-double-left.png"

const Pagination = () => {
    return (
        <>
        <PaginationWrap>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<Next $img={arrowIcon} />}
                // onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={10}
                previousLabel={<Previous $img={arrowIcon} />}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="page-item"
                activeClassName="pined-page"
            />
        </PaginationWrap>
        </>
    );
};

// 페이지네이션 컨테이너
const PaginationWrap = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .page-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 13px;
        width: 30px;
        height: 30px;
        font-size: 18px;
        
        &:hover{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px;
            width: 30px;
            height: 30px;
            background: #E3FAFF;
            border-radius: 3px;
        }
    }

    .pined-page {
        width: 30px;
        height: 30px;
        background: #46D0D0;
        border-radius: 3px;
        color: #fff;
    }

    .break a{
        margin: 15px 15px 23px;
    }

`;

const Previous = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    margin: auto;
    transform:rotate(180deg);
    background: url(${props => props.$img}) no-repeat;
    background-size: 100%;
`;

const Next = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    margin: auto;
    background: url(${props => props.$img}) no-repeat;
    background-size: 100%;
`;

export default Pagination;