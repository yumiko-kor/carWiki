import { useNavigate } from "react-router-dom";

// style & img
import styled from "styled-components";
import  PlusIcon  from "../../assets/img/icon/plus.png"
import { Icon } from "../../styles/Component";

const RegistBtn = () => {
    const navigate = useNavigate();

    const handleMove = (e) => {
        e.preventDefault();
        
        // TODO /car-regist
        navigate('/car-management')
    }

    return (
        <>
            <ButtonWrap onClick={e=> handleMove(e)}>
                <BtnContents>
                    <Icon src={PlusIcon} />
                    <BtnText>차량 바로 등록하기</BtnText>
                </BtnContents>
            </ButtonWrap>
        </>
    );
};

const ButtonWrap = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
    position: fixed;
    right: 50%;
    margin-right: -50%;
    top: 73%;
`;

const BtnContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 263px;
    height: 90px;
    border-radius: 50px 0 0 50px;
    background: linear-gradient(90deg, #58d6f0cf, rgba(56, 231, 209, 0.4));
    background-size: cover;
    animation: move 1s infinite ease-in-out alternate;
    @keyframes move{
        from{
            transform: translatex(0px);
        }
        to{
            transform: translatey(3px);
        }
    }
`;

const BtnText = styled.span`
    font-size: 18px;
    color: #fff;
`;

export default RegistBtn;