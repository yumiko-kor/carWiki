import { NavLink } from "react-router-dom";
import styled from "styled-components";


import { SideBarData } from "../../../assets/data/SideBarData";

const Navi = () => {

    SideBarData.map((data) => {
        console.log(
            data.path,

            "스플리트 테스트", data.path.substr(1).split("-",1)+"B"

            , data.icon
        )
    })

    return (
        <NaviContainer>
            <ul>
                {SideBarData.map((item, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={item.path}>
                                <NaviItem>
                                    <NaviLogo src={item.icon}></NaviLogo>
                                    <NaviTitle>{item.title}</NaviTitle>
                                </NaviItem>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
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
    padding-left: 20px;

	&:hover,
	&.active {
        border-left : thick solid #54B6CB;
        background-image: linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0));
        background-size: cover;
	}
	&.active ~ ul {
		display: block;
	}
	&.active:before {
        background-image: linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0));
        background-size: cover;
	}
`;

const NaviLogo = styled.img`
    width: 23px;
    height: 23px;
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
	font-size: 14px;
	font-weight: 300;

    &:hover
    &.active {
        color: #1EA1CA;
	}
`;


export default Navi;