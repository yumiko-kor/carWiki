import { useEffect, useState } from "react"
import { auth } from "../store/auth"
import { useRecoilState } from "recoil"

export const AuthCheck = () => {
    const [token, setToken] = useRecoilState(auth);
    
    useEffect(()=> {
        setToken(sessionStorage.getItem("token", true));
    })

    return token
}