// style & img
import styled from "styled-components";
import Icon  from "../../../assets/img/icon/arrangement.png"

const Notice = () => {
    return (
        <>
            <InfoContainer>
                <IconBox src={Icon} />
                <InfoText>
                    このページは準備中でございます。
                </InfoText>
            </InfoContainer>
        </>
    );
};

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const InfoText = styled.p`
    color: #89CAD8;
    font-size: 26px;
    font-weight: 300;
`;

const IconBox = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    margin-bottom: 2em;
`

export default Notice;