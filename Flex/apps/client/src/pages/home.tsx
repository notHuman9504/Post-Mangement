import { useEffect, useState } from "react"
import { Days } from "ui/comp"
import axios from "axios"
import { useRouter } from "next/router"
import { BASE_URL } from "@/config"
export default function Home(){
    const router = useRouter()
    const [days,setDays] =useState([])
    useEffect(()=>{
        const fun=async()=>{
            const res=await axios.get("./api/getdays",{
                headers:{
                    authorization:"Bearer " + localStorage.getItem("token")
                }
            })
            if(!res.data.days)
            {
                return;
            }
            else
            {
                setDays(res.data.days);
            }
        }
        fun();
    },[])
    return (<>
        <Days days={days} 
            onClick={async(title)=>{
                const res=await axios.post("./api/pushdays",{
                    title:title
                },{
                    headers:{
                        authorization:"Bearer "+localStorage.getItem("token"),
                    }
                });
                if(res.data.days)
                {
                    setDays(res.data.days);
                }
            }}
            onEdit ={
                async(index)=>{
                    router.push(`${BASE_URL}/day/${index}`);
                }
            }
        ></Days>
        </>)
}