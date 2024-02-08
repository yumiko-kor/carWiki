
// style
import styled from "styled-components";

// 컴포넌트
// import { Container } from "../../../styles/Component";
import Header from "../header/Header";

const Layout = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
`;


export default Layout;