import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'middleware/auth'
import {User } from "db/src"
import {Days } from "db/src"
import dbConnect from "@/lib/dbConnects"
import { AuthHead } from 'common/types'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    const parseInput = AuthHead.safeParse(req.headers.authorization);
    const parsedTitle= AuthHead.safeParse(req.body.title);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong token params"})
    }
    else if(!parsedTitle.success)
    {
        return res.status(411).json({msg:"wrong title params"})
    }
    else
    {
        const  token  = (parseInput.data).split(' ')[1];
        const title=parsedTitle.data;
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
                const day=new Days({title});
                user.days.push(day);
                await user.save();
                res.json({days:user.days});
            }
        });
    }
}