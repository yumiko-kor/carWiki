import styled from "styled-components";

// component
import { HeaderContainer } from "../../../styles/Component";
import HeaderLayout from "./HeaderLayout";
import Profile from "./Profile";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLayout />
            <Profile />
        </HeaderContainer>
    );
};

export default Header;