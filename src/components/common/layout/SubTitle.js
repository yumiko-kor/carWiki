import styled from "styled-components";

// component
import Button from "../button/Button";
import { TitleText } from "../../../styles/Component";

const SubTitle = ({ titleText, buttonText, display }) => {

    return (
        <SubTitleContainer>
            <TitleText>{titleText}</TitleText>
            <Button display={display} text={buttonText} theme="register" />
        </SubTitleContainer>
    );
};

const SubTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom:  thin  solid #c1ecf9;
    padding-bottom: 30px;
`;

export default SubTitle;