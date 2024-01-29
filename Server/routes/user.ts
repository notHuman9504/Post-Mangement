import jwt from "jsonwebtoken"
import express from "express";
import {User} from "../db/schema";
import {SECRET,authjwt} from "../middleware/auth";

const router = express.Router();

router.post("/signup",async(req,res)=>{
    
})