import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'middleware/auth'
import {User } from "db/src"
import dbConnect from "@/lib/dbConnects"
import { AuthHead,Index } from 'common/types'



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    const i= +req.query.index
    const parseInput = AuthHead.safeParse(req.headers.authorization);
    const parseIndex = Index.safeParse(i);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong token params"})
    }
    else if(!parseIndex.success)
    {
        return res.status(411).json({msg:"wrong index type"})
    }
    else
    {
        const  token  = (parseInput.data).split(' ')[1];
        const index = parseIndex.data;
        getUser(token, async(username) => {
            if (!username) {
                res.status(403).json({});
                return
            }
            const user = await User.findOne({username});
            if(!user)
            {
                return res.json({msg:"user not found!"});
            }
            else
            {
                const size= user.days.length;
                if(index>=size || index<0)
                {
                    return res.status(411).json({msg:"index Out of bound"})
                }
                else
                {
                    res.json({posts:user.days[index].Posts})
                }
            }
        });
    }
}