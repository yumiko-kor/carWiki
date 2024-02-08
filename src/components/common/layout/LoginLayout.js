// style
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
import { Container } from "../../../styles/Component";

const LoginLayout = () => {
    return (
        <Container >
            <Outlet />
        </Container>
    );
};

export default LoginLayout;