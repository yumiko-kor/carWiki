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
                <TextS $underline="underline" fontWeight="bold" onClick={handleLogout}>로그아웃</TextS>
            </FlexContent>
        </>
    );
};

export default Profile;