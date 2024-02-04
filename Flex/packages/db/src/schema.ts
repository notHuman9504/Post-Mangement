import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    content:String,
    left:String,
    top:String,
    width:String,
    height:String
})

const imageSchema=new mongoose.Schema({
    link:String,
    left:String,
    top:String,
    width:String,
    height:String
})



export const daySchema=new mongoose.Schema({
    title:String,
    Posts:[postSchema],
    Images:[imageSchema]
})


const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    days:[daySchema]
})

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Days = mongoose.models.Days || mongoose.model('Days', daySchema);