import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req:NextApiRequest,res:NextApiResponse)
{
    console.log("Hello World")
    res.json({msg:"called"});
}