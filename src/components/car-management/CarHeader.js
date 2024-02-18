import { useNavigate } from "react-router-dom";

// component
import SubTitle from "../common/layout/SubTitle";

const CarHeader = () => {
    const navigate = useNavigate();

    const MovePage = (e) => {
        console.log("우 ..")
    }

    return (
        <>
            <SubTitle titleText="자동차 관리" buttonText="자동차 등록" />
        </>
    );
};

export default CarHeader;