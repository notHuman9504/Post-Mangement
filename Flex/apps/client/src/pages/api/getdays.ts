import type { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'middleware/auth'
import {User } from "db/src"
import dbConnect from "@/lib/dbConnects"
import { AuthHead } from 'common/types'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    const parseInput = AuthHead.safeParse(req.headers.authorization);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong token params"})
    }
    else
    {
        const  token  = (parseInput.data).split(' ')[1];
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
                res.json({days:user.days})
            }
        });
    }
}