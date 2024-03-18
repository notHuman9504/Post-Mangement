import { BASE_URL } from "@/config";
import { userState } from "@/store/atoms/user";
import axios from "axios";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { Sign } from "ui/comp";

export default function SignUp(){
    const router = useRouter()
    const setUser = useSetRecoilState(userState);
    return (<div>
        <Sign onClick={async (username,password)=>{
            
        const res=await axios.post("/api/signup",{
        username:username,
        password:password
    })
    if(res.data.token)
    {
        localStorage.setItem("token", res.data.token);
        setUser({
            userEmail:username
        })
        router.push(`${BASE_URL}/home`);
    }
    else
    {
        console.log("SignUp failed");
        
    }
    
}} ></Sign>
    </div>)
}

