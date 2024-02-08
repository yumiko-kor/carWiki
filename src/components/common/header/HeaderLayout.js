import { Link } from "react-router-dom";

// style, img
import styled from "styled-components";
import carwikiLogo from "../../../assets/img/icon/CarWiki.png";
import { FlexContent, Logo } from "../../../styles/Component";


const HeaderLayout = () => {
    return (
        <FlexContent>
            <Link to="/main">
                <Logo src={carwikiLogo} width="111px" />
            </Link>
            <TitleText $padding="0 10px" fontSize="20px">자동차 통합 관리 시스템</TitleText>
        </FlexContent>
    );
};

export const TitleText = styled.span`
    display : flex;
    justify-content : center;
    align-items : center;
	line-height: 18px;
    border-left : thin solid #464849;
    padding: 0 10px;
    margin: 0 10px;
    color: #464849;
	font-size: 20px;
	font-weight: 350;
`;

export default HeaderLayout;