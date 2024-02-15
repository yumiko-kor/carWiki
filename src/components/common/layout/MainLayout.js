// 컴포넌트
import { Container } from "../../../styles/Component"; 
import { MainSearchBar, RateContent, CarRateContent, RegistBtn } from "../../main";

const MainLayout = () => {
    return (
        <Container direction="column" type="grid" $justify="center" >
            <MainSearchBar />
            <RateContent />
            <CarRateContent />
            <RegistBtn />
        </Container>
    );
};

export default MainLayout;