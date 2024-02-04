import { Log } from "ui/comp"
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "@/config";
export default function LogIn(){
    const router = useRouter()
    return (<>
        <Log onClick={async (username,password)=>{
            
            const res=await axios.post("/api/login",{
            username:username,
            password:password
        })
        if(res.data.token)
        {
            localStorage.setItem("token", res.data.token);
            router.push(`${BASE_URL}/home`);
        }
        else
        {
            console.log("Login failed");
            
        }
        
    }} ></Log>
    </>)
}