// 컴포넌트
import { Container } from "../../../styles/Component"; 
import { MainSearchBar, RateContent, CarRateContent } from "../../main";

const MainLayout = () => {
    return (
        <Container direction="column" type="grid" $justify="center" >
            <MainSearchBar />
            <RateContent />
            <CarRateContent />
        </Container>
    );
};

export default MainLayout;