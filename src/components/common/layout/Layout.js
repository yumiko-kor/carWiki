import { Outlet } from "react-router-dom";

// style
import styled from "styled-components";

// 컴포넌트
import { Container, ContentContainer } from "../../../styles/Component";
import { Header, Navi } from "../header";

const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Navi />
                <ContentContainer>
                    <Outlet />
                </ContentContainer>
            </Container>
        </>
    );
};


export default Layout;