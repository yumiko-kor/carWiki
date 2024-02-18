import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageReturn = () => {

    const navigate = useNavigate();

    const isToken = sessionStorage.getItem('token') ? true : false;

    useEffect(() => {
        !isToken && navigate("/fail");
    }, []);
    
    return
};

export default PageReturn;