import { NavLink } from "react-router-dom";
import { SideBarData } from "../../../assets/data/SideBarData";

// style && img
import styled from "styled-components";

const Navi = () => {

    return (
        <NaviContainer>
            <ul>
                {SideBarData.map((item, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={item.path} 
                                style={({ isActive }) => ({
                                    borderLeft : isActive && "thick solid #54B6CB",
                                    backgroundImage: isActive && "linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0))",
                                    backgroundSize: isActive && "cover"
                                })}
                            >
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
	flex: 0 0 204px;
	background: #ffffff;
	align-self: stretch;
    z-index: 1;
`;

const NavContoller = styled(NavLink)`
	&:hover,
	&.active {
        border-left : thick solid #54B6CB;
        background-image: linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0));
        background-size: cover;
	}
    &.active::after {
        background-image: linear-gradient(90deg, rgba(223, 249, 255, 1), rgba(93, 226, 255, 0));
        background-size: cover;
	}
`;

const NaviItem = styled.div`
	width: 204px;
    height: 60px;
    display: flex;
    justify-content : flex-start;
    align-items : center;
    vertical-align: middle;
    padding-left: 20px;
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