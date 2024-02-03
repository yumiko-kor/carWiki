// style
import styled from "styled-components";

// Library
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminAuth } from "../../assets/data/AdminAuth";

const LoginForm = () => {
    const [ authInfo, setAuthInfo ] = useState({
        adminId : AdminAuth.map((data) => (data.id)),
        adminPw : AdminAuth.map((data) => (data.pw))
    })
    console.log(authInfo)


    return (
        <>
        {/* 로그인 폼 추가 */}


        </>
    );
};


export default LoginForm;