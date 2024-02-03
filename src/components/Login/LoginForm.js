// Library
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AdminAuth } from "../../assets/data/AdminAuth";
import { LoginValidation } from "./LoginValidation";
import { yupResolver } from '@hookform/resolvers/yup';

// style
import styled from "styled-components";
import Button from "../common/button/Button";
import { TextInput } from "../../styles/Component";


const LoginForm = () => {
    const navigate = useNavigate();

    const [ authInfo, setAuthInfo ] = useState({
        adminId : String(AdminAuth.map((data) => (data.id))),
        adminPw : String(AdminAuth.map((data) => (data.pw)))
    })

    console.log(authInfo)


    // useForm
    const { 
        register, 
        handleSubmit, 
        watch 
    } = useForm({
        resolver: yupResolver(LoginValidation),
        mode: 'onSubmit',
    });

    const values = watch();

    const onSubmit = () => {
        let authCheck = false;

        (values.id === authInfo.adminId) &&
        (values.pw === authInfo.adminPw)
        ? authCheck = true : authCheck = false;

        if(authCheck) {
            sessionStorage.setItem('token', values.id);
            navigate('./main')
        }

    }



    return (
        <>
        {/* 로그인 폼 추가 */}
            <FormWrapper onSubmit={handleSubmit(onSubmit)} >
                <InputWrapper>
                    <LabelWrapper>
                        <LabelName> * ID</LabelName>
                        <TextInput
                            fontSize="15px" 
                            type="text"
                            $padding="16px 20px" 
                            name="id" 
                            placeholder="ex) admin@carwiki.com"
                            {...register('id')}
                        />
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelName> * PW</LabelName>
                        <TextInput
                            fontSize="15px" 
                            type="password"
                            $padding="16px 20px" 
                            name="pw" 
                            placeholder="패스워드를 입력해주세요."
                            {...register('pw')}
                        />
                    </LabelWrapper>
                </InputWrapper>
                <BtnWrapper>
                    <Button type="submit" text="로그인" theme="login"/>
                </BtnWrapper>
            </FormWrapper>


        </>
    );
};

const FormWrapper = styled.form`
	margin-top: 20%;
`;

const InputWrapper = styled.div`
    width: 75%;
	display: flex;
	flex-flow: column;
	gap: 6px;
    margin: auto;
`;

const LabelWrapper = styled.div`
    margin: 1.2em 0;
`

const LabelName = styled.div`
    font-size: 1.3em;
    color: #666666;
    padding-bottom: 0.5em;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: right;
    margin: 2em 80px;
`;


export default LoginForm;