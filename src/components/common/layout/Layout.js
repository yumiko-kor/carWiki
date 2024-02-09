// style
import styled from "styled-components";

// 컴포넌트
import { Container } from "../../../styles/Component";
import { Header, Navi } from "../header";

const Layout = () => {
    return (
        <>
            <Container direction="column" >
                <Header />
                <Navi />
            </Container>
        </>
    );
};


export default Layout;