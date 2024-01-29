import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    content:String,
    left:Number,
    top:Number
})

const imageSchema=new mongoose.Schema({
    link:String,
    left:Number,
    top:Number
})

const Post = mongoose.model('Post', postSchema);
const Image = mongoose.model('Image', imageSchema);

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    AllPosts:[{type:Post}],
    AllImages:[{type:Image}]
})

export const User = mongoose.model('User', userSchema);