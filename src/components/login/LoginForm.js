// Library
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AdminAuth } from "../../assets/data/AdminAuth";
import { LoginValidation } from "./LoginValidation";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilState } from "recoil";

// style
import styled from "styled-components";
import Button from "../common/button/Button";
import { TextInput } from "../../styles/Component";

// component
import { auth } from "../../store/auth";

const LoginForm = () => {
    const [ errorText, setErrorText ] = useState("");
    const [ authInfo, setAuthInfo ] = useState({
        adminId : String(AdminAuth.map((data) => (data.id))),
        adminPw : String(AdminAuth.map((data) => (data.pw)))
    })
    const [ authCheck, setAuthCheck ] = useRecoilState(auth);
    const [ modal, setModal ] = useState('hidden');
    const [ isClick, setIsClick ] = useState(false);
    
    const token = "Test Account";
    const navigate = useNavigate();

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
            const getToken = sessionStorage.setItem('token', token);
            setAuthCheck(getToken);

        }else {
            setErrorText("등록되지 않은 회원입니다.");
        }
        
        sessionStorage.getItem("token") &&  navigate('./main');
    }
    
    const guidId = (e) => {
        setModal("visible");
    }
    
    const handleModal = (e) => {
        setIsClick(true);
        sessionStorage.setItem('token', token);
    }

    return (
        <>
        {/* 로그인 폼 추가 */}
            <FormWrapper onSubmit={handleSubmit(onSubmit)} >
                <InputWrapper>
                    <GuideModal $visibilty={modal}>
                        <span>サンプルIDをお使いになりますか？</span>
                        <ModalBtn onClick={handleModal}>はい</ModalBtn>
                    </GuideModal>
                    <LabelWrapper >
                        <LabelName> * ID</LabelName>
                        <TextInput
                            value={isClick ? "admin@carwiki.com" : ""}
                            onFocus={e => guidId(e)}
                            radius="50px"
                            fontSize="15px" 
                            type="text"
                            $padding="16px 20px"  
                            name="id" 
                            placeholder= "ex) admin@carwiki.com"
                            {...register('id')}
                        />
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelName> * PW</LabelName>
                        <TextInput
                            value={isClick ? "1234" : ""}
                            radius="50px"
                            fontSize="15px" 
                            type="password"
                            $padding="16px 20px" 
                            name="pw" 
                            placeholder="패스워드를 입력해주세요."
                            {...register('pw')}
                        />
                    </LabelWrapper>
                    <GuideText>サンプルアカウント ( id: admin@carwiki.com / pw: 1234 )</GuideText>
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

const GuideText = styled.p`
    font-weight: 340;
    font-size: 15px;
    color: #1EA1CA;
`;

const GuideModal = styled.div`
    visibility: ${props => props.$visibilty || "visible"};
    display: flex;
    right: 130px;
    top: 275px;
    position: absolute;
    justify-content: space-between;
    width: 316px;
    height: 61px;
    border-radius: 10px;
    background-color: #E3FAFF;
    border: 1px solid #c0d1d9;
    align-items: center;
    padding: 15px 20px;
`;

const ModalBtn = styled.button`
    font-size: 16px;
    color: #259BC0;
`;

export default LoginForm;