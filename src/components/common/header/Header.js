import carwikiLogo from "../../../assets/img/icon/CarWiki.png";

import styled from "styled-components";

import { Logo } from "../../../styles/Component";
import Profile from "./Profile";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={carwikiLogo} width="111px" />
            <Profile />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background: #f6f6f6;
    width: 100%;
    height: 112px;
	padding: 3em;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	word-break: break-all;
	justify-content: space-between;
	align-items: center;
`;

export default Header;