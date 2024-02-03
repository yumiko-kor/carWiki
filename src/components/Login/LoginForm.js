// Library
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminAuth } from "../../assets/data/AdminAuth";

// style
import styled from "styled-components";
import { TextInput } from "../../styles/Component";


const LoginForm = () => {
    const [ authInfo, setAuthInfo ] = useState({
        adminId : AdminAuth.map((data) => (data.id)),
        adminPw : AdminAuth.map((data) => (data.pw))
    })
    console.log(authInfo)


    return (
        <>
        {/* 로그인 폼 추가 */}
            <FormWrapper>
                <InputWrapper>
                    <LabelWrapper>
                        <LabelName> * ID</LabelName>
                        <TextInput
                            fontSize="15px" 
                            type="text"
                            $padding="16px 20px" 
                            name="email" 
                            placeholder="ex) admin@carwiki.com"
                        />
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelName> * PW</LabelName>
                        <TextInput
                            fontSize="15px" 
                            type="password"
                            $padding="16px 20px" 
                            name="email" 
                            placeholder="패스워드를 입력해주세요."
                        />
                    </LabelWrapper>
                </InputWrapper>

                <LoginButton>로그인</LoginButton>
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

const LoginButton = styled.button`

`;


export default LoginForm;