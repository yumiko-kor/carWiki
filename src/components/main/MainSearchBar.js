//library

//component
import { FlexContent, Icon } from "../../styles/Component"; 

// style & img
import styled from "styled-components";
import SearchIcon from "../../assets/img/icon/search-L.png";

const MainSearchBar = () => {
    // TODO 패스랑 바로가기 링크 .. 연결해야함
    // 해시태그 컨텐츠
    const HashTagData = [
        "차종 코드", "등록 지역 코드", "차명 코드"
    ]

    const HandleSearch = () => {
        console.log("test")
    }


    return (
        <FlexContent>
            <LeftContainer>
                <InfoText>차량 정보를 검색해보세요.</InfoText>
                <SearchBarContainer>
                    <SearchInput placeholder="검색어를 입력해주세요."></SearchInput>
                    <ButtonWrap onClick={HandleSearch}>
                        <Icon src={SearchIcon} />
                    </ButtonWrap>
                </SearchBarContainer>
            </LeftContainer>
            <RightContainer>
                {
                    HashTagData.map((data, index) => { 
                        return (
                            <HashTagItem key={index}>#{data}</HashTagItem>
                        )
                    })
                }
            </RightContainer>
        </FlexContent>
    );
};

const LeftContainer = styled.form`
    /* display: grid; */
    justify-content: left;
    width: 800px;
    margin-right: 30px;
`;

const RightContainer = styled.div`

`;

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 800px;
    height: 84px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 5px 5px #f1f1f166;
    margin: 1.5em 0;
`;

const InfoText = styled.span`
	line-height: 18px;
    color: #464849;
    font-size: 20px;
`;

const SearchInput = styled.input`
    color: #54B6CB;
    height: 40px;
    width: 680px;
	line-height: 18px;
    font-size: 14px;
    font-weight: 300;
    border-bottom : thin solid #98D4E1;
    margin: auto;

    &::placeholder {
		color: #ccf0f7;
	}
	&:focus {
		border: "2px solid #ccf0f7";
	}
`;

const ButtonWrap = styled.button`
    margin: auto;
`;

const HashTagItem = styled.button`
    width: 100%;
    font-size: 16px;
    border-radius: 50px;
    border: 2px solid #A4E4F2;
    color: #1EA1CA;
    padding: 9px 20px;
    display : flex;
    justify-content : center;
    align-items : center;
    vertical-align: middle;
    background-color: #fff;
    margin-bottom: 5px;

    &:hover{
        background-color: rgba(231, 250, 254, 1);
    }
`;


export default MainSearchBar;