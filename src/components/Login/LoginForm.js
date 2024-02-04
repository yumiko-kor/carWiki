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

    const token = "test";

    const [ errorText, setErrorText ] = useState("");
    const [ authInfo, setAuthInfo ] = useState({
        adminId : String(AdminAuth.map((data) => (data.id))),
        adminPw : String(AdminAuth.map((data) => (data.pw)))
    })

    // useForm
    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors }
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
            sessionStorage.setItem('token', token);
            navigate('./main')
        }else {
            setErrorText("등록되지 않은 회원입니다.");
        }
    }


    return (
        <>
        {/* 로그인 폼 추가 */}
            <FormWrapper onSubmit={handleSubmit(onSubmit)} >
                <InputWrapper>
                    <LabelWrapper >
                        <LabelName

                        > * ID</LabelName>
                        <TextInput
                            radius="50px"
                            fontSize="15px" 
                            type="text"
                            $padding="16px 20px" 
                            name="id" 
                            placeholder= "ex) admin@carwiki.com"
                            // errors={errors}
                            {...register('id')}
                        />
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelName> * PW</LabelName>
                        <TextInput
                            radius="50px"
                            fontSize="15px" 
                            type="password"
                            $padding="16px 20px" 
                            name="pw" 
                            // errors={errors}
                            placeholder="패스워드를 입력해주세요."
                            {...register('pw')}
                        />
                    </LabelWrapper>
                </InputWrapper>
                <BtnWrapper>
                    <ErrorText>{errorText}</ErrorText>
                    <Button width="95%" type="submit" text="로그인" theme="login"/>
                </BtnWrapper>
            </FormWrapper>
        </>
    );
};

const FormWrapper = styled.form`
	margin-top: 15%;
`;

const InputWrapper = styled.div`
    width: 75%;
	display: flex;
	flex-flow: column;
	gap: 6px;
    margin: auto;
`;

const LabelWrapper = styled.div`
    margin: 1em 0;
    &:focus-within label {
        color: #72E6FF;
    }
`

const LabelName = styled.label`
    display: inline-block;
    font-size: 1.3em;
    color: #666666;
    margin-bottom: 0.5em;
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 1.2em 80px;
`;

const ErrorText = styled.span`
    width: 90%;
    margin: 0 1em 1.2em;
    color: #FE6E6E;
`


export default LoginForm;