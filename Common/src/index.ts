import {number, z} from "zod";

export const AuthInput=z.object({
    username:z.string().min(1),
    password:z.string().min(1)
})

export type AuthParams = z.infer<typeof AuthInput>;

export const PostInput=z.object({
    content:z.string(),
    left:number(),
    top:number()
})

export type PostParams = z.infer<typeof PostInput>

export const ImageInput=z.object({
    link:z.string(),
    left:number(),
    top:number()
})

export type ImageParams = z.infer<typeof ImageInput>