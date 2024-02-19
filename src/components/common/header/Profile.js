import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FlexContent, TextS } from "../../../styles/Component";

const Profile = () => {
    const AdminName = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
		sessionStorage.removeItem('token');

		navigate('/');
    };

    return (
        <>
            <FlexContent>
                <TextS $padding="0 2em">안녕하세요, {AdminName} 님</TextS>
                <LogoutBtn $underline="underline" fontWeight="bold" onClick={handleLogout}>로그아웃</LogoutBtn>
            </FlexContent>
        </>
    );
};

const LogoutBtn = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
	line-height: 18px;
    padding: 0;
    color: #464849 ;
	font-size: 14px;
	font-weight: bold;
    text-decoration: underline;
`;

export default Profile;