import { useEffect, useState } from "react";
import { Playground } from "ui/comp";
import axios from "axios"
import { useParams } from "next/navigation";
import { BASE_URL } from "@/config";
import {  useRouter } from "next/router";
export default function EditDay()
{
    const router=useRouter();
    const {index} = router.query
    const [post,setPosts] = useState([]);
    
    useEffect(()=>{
        if(!index)
        {
            return;
        }
        const fun=async()=>{
            const res=await axios.get(`${BASE_URL}/api/getposts/${index}`,{
                headers:{
                    authorization:"Bearer " + localStorage.getItem("token"),
                    index:index
                }
            })
            if(!res.data.posts)
            {
                return;
            }
            else
            {
                setPosts(res.data.posts);
            }
        }
        fun();
    },[index])
    return(<>
        <Playground posts={post}
        savesize={async(idx:number,width:string,height:string)=>{
            const res=await axios.post(`${BASE_URL}/api/savesize`,{
                dindex:index,
                index:idx,
                height,
                width
            },{
                headers:{
                    Authorization:"Bearer " + localStorage.getItem("token")
                }
            })
            if(res.data)
            {
                return res.data;
            }
            return null;
        }}
        savepos={async(idx:number,top:string,left:string)=>{
            const res=await axios.post(`${BASE_URL}/api/savepos`,{
                dindex:index,
                index:idx,
                top,
                left
            },{
                headers:{
                    Authorization:"Bearer " + localStorage.getItem("token")
                }
            })
            if(res.data)
            {
                return res.data;
            }
            return null;
        }}
        onClick={async(content)=>{
            
            const res=await axios.post(`${BASE_URL}/api/pushpost`,{
                content:content,
                index:index
            },{
                headers:{
                    authorization:"Bearer "+localStorage.getItem("token")
                }
            })
            
            if(!res.data.posts)
            {
                return;
            }
            else
            {
                setPosts(res.data.posts);
            }
        }}
        ></Playground>
    </>)
}