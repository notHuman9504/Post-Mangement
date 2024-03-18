import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'middleware/auth'
import {User } from "db/src"
import {Days,Post } from "db/src"
import dbConnect from "@/lib/dbConnects"
import { AuthHead,Index } from 'common/types'
import { useRouter } from 'next/router'
import { use } from 'react'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    
    const i = parseInt(req.body.dindex);
    const j = parseInt(req.body.index);

    const parseInput = AuthHead.safeParse(req.headers.authorization);
    const parseDindex = Index.safeParse(i)
    const parseIndex = Index.safeParse(j);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong token params"})
    }
    else if(!parseDindex.success)
    {
        return res.status(411).json({msg:"wrong index params"})
    }
    else if(!parseIndex.success)
    {
        return res.status(411).json({msg:"wrong index type"})
    }
    else
    {
        const  token  = (parseInput.data).split(' ')[1];
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
        
                ((user.days[parseDindex.data]).Posts[parseIndex.data]).top = req.body.top;
                ((user.days[parseDindex.data]).Posts[parseIndex.data]).left = req.body.left;
                user.save();
                res.json(user.days[parseDindex.data])
            }
        });
    }
}