import type { NextApiRequest, NextApiResponse } from 'next'
import {User } from "db/src"
import jwt from "jsonwebtoken"
import dbConnect from "@/lib/dbConnects"
import {SECRET} from "middleware/auth"
import { AuthInput } from 'common/types'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await dbConnect()
    const parseInput = AuthInput.safeParse(req.body);
    if(!parseInput.success)
    {
        return res.status(411).json({msg:"wrong input params"})
    }
    else
    {
        const { username, password } = parseInput.data;
        const user=await User.findOne({username});
        if(user)
        {
            res.status(403).json({msg:"User exists already"});
        }
        else
        {
            const obj = { username: username, password: password ,days :[]};
            const newUser = new User(obj);
            newUser.save();

            const token = jwt.sign({username}, SECRET, { expiresIn: '1h' });
            res.json({msg:"user created successfully",token});
        }
    }
}