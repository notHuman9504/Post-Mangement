import { BASE_URL } from "@/config";
import axios from "axios";
import { useRouter } from "next/router";
import { Sign } from "ui/comp";

export default function SignUp(){
    const router = useRouter()
    return (<div>
        <Sign onClick={async (username,password)=>{
            
        const res=await axios.post("/api/signup",{
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
        console.log("SignUp failed");
        
    }
    
}} ></Sign>
    </div>)
}

