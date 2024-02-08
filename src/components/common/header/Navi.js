import styled from "styled-components";


// import { Home, Car, User, Employ } from '../../../assets/img';
import home from "../../../assets/img/icon/house.png"

const Navi = () => {
    return (
        <NaviContainer>
            <NaviItem>
                <NaviLogo src={home}></NaviLogo>
                <NaviTitle>홈</NaviTitle>
            </NaviItem>
        </NaviContainer>
    );
};

const NaviContainer = styled.div`
	width: 204px;
	min-height: 89vh;
    height: 100%;
	flex: 0 0 280px;
	background: #ffffff;
	align-self: stretch;
`;

const NaviItem = styled.div`
    width: 177px;
    height: 60px;
    display: flex;
    justify-content : flex-start;
    align-items : center;
    vertical-align: middle;
    border-left : thick solid #54B6CB;
    padding-left: 20px;
    background-image: linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0));
    background-size: cover;
`;

const NaviLogo = styled.img`
    width: 20px;
    height: 20px;
    display : flex;
    justify-content : center;
    align-items : center;
    vertical-align: middle;
`;

const NaviTitle = styled.span`
    display : flex;
    justify-content : center;
    align-items : center;
	line-height: 18px;
    padding: 0 10px;
    margin: 0 10px;
    color: #464849;
	font-size: 20px;
	font-weight: 350;
`;


export default Navi;