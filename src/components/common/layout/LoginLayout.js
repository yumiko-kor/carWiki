// style
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
// import { Container } from "../../../styles/components";

const LoginLayout = () => {
    return (
        <Container >
            <Outlet />
        </Container>
    );
};

export const Container = styled.div`
    display: flex;
`;


export default LoginLayout;