import { z ,string, number} from "zod";

export const AuthHead=z.string()

export const AuthInput=z.object({
    username:z.string().min(1),
    password:z.string().min(1)
})

export const Index=number()

export type AuthParams = z.infer<typeof AuthInput>;

export const PostInput=z.object({
    content:z.string(),
    left:string(),
    top:string(),
    width:string(),
    height:string()
})

export type PostParams = z.infer<typeof PostInput>

export const ImageInput=z.object({
    link:z.string(),
    left:string(),
    top:string(),
    width:string(),
    height:string()
})

export type ImageParams = z.infer<typeof ImageInput>

export const Day = z.object({
    title:string(),
    posts:PostInput,
    images:ImageInput
})

export type DayType = z.infer<typeof Day>