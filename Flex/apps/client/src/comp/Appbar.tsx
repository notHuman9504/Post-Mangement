import { BASE_URL } from "@/config"
import { userState } from "@/store/atoms/user";
import { Router, useRouter } from "next/router"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AppBar } from "ui/comp"

export default function Appbar()
{
    const username=useRecoilValue(userState).userEmail;
    const setUser=useSetRecoilState(userState)
    const router=useRouter();
    return (<AppBar
        username={username}
        onSignup={()=>{
            router.push(`${BASE_URL}/signup`)
        }}
        onLogIn={()=>{
            router.push(`${BASE_URL}/login`)
        }}

        onLogOut={()=>{
            localStorage.setItem('token',null);
            setUser({
                userEmail:null
            })
            router.push(`${BASE_URL}/`)
        }}
        ></AppBar>)
}