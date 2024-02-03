import * as yup from "yup";

export const LoginValidation = yup.object({
    id: yup.string()
        .email("이메일 형식이 아닙니다.")
        .required("아이디를 입력해주세요."),
    pw: yup.string()
        .required("비밀번호를 입력해주세요.")
});