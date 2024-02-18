import styled from "styled-components";
import Button from "../button/Button";
import arrow from "../../../assets/img/icon/down-arrow-blue.png"

const SearchBar = ({ optionData, }) => {
    return (
        <>
            <Container>
                <RowBtn>내림차순</RowBtn>
                <SelectBox>
                    {
                        optionData &&
                        optionData.map((data, index) => (
                            <OptionList key={index}>{data}</OptionList>
                        ))
                    }
                </SelectBox>
                <SearchBarBox />
                <Button theme="search" text="검색" />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    margin: 20px 10px;
`;

const RowBtn = styled.button`
    font-size: 15px;
    border-bottom: solid #54B6CB;
    color: #54B6CB;
    margin-right: 20px;
`;

const SelectBox = styled.select`
    width: 150px;
    height: 35px;
    padding: 5px 30px 5px 10px;
    border: solid thin #54B6CB;
    outline: 0 none;
    margin-right: 10px;
    color: #1EA1CA;
    background: url(${arrow}) calc(100% - 5px) center no-repeat;
    background-size: 13px;
`;

const OptionList = styled.option`
`;

const SearchBarBox = styled.input`
    width: 523px;
    height: 35px;
    padding: 10px;
    border: solid thin #54B6CB;
    margin-right: 10px;
`;


export default SearchBar;