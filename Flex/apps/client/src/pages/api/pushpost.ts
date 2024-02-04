import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'middleware/auth'
import {User } from "db/src"
import {Days,Post } from "db/src"
import dbConnect from "@/lib/dbConnects"
import { AuthHead,Index } from 'common/types'
import { useRouter } from 'next/router'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    
    const i = parseInt(req.body.index);

    const parseInput = AuthHead.safeParse(req.headers.authorization);
    const parsedContent= AuthHead.safeParse(req.body.content);
    const parseIndex = Index.safeParse(i);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong token params"})
    }
    else if(!parsedContent.success)
    {
        return res.status(411).json({msg:"wrong content params"})
    }
    else if(!parseIndex.success)
    {
        return res.status(411).json({msg:"wrong index type"})
    }
    else
    {
        const  token  = (parseInput.data).split(' ')[1];
        const content=parsedContent.data;
        const index = parseIndex.data;
        getUser(token, async(username) => {
            if (username==false) {
                res.status(403).json({});
                return
            }
            // console.log(username);
            const user = await User.findOne({username});
            if(!user)
            {
                return res.json({msg:"user not found!"});
            }
            else
            {
                const size = user.days.length;
                if(index>=size || index<0)
                {
                    return res.status(411).json({msg:"index Out of bound"})
                }
                const obj={
                    content:content,
                    left:"auto",
                    top:"auto",
                    width:"auto",
                    height:"auto"
                }
                const post=new Post(obj);
                user.days[index].Posts.push(obj);
                await user.save();
                res.json({posts:user.days[index].Posts});
            }
        });
    }
}