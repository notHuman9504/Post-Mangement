import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
export const SECRET = "TOP S3CR3T";

export const authjwt = (req: Request, res: Response, next: NextFunction) => {

    const Auth = req.headers.authorization;
    if (Auth) {
        const token = Auth.split(' ')[1];
        jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                res.sendStatus(403).send("Invalid Authorization");
                return;
            }
            if (!payload) {
                return res.sendStatus(403);
            }
            if (typeof payload === "string") {
                return res.sendStatus(403);
            }
            req.headers["username"] = payload.id;
            next();
        });
    }
    else
    {
        res.sendStatus(401).send("Invalid Authorization");
    }
}