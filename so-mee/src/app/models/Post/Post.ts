import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
    },
    post:{
        type:String
    },
    postimage:{
        type:String
    },
})
const Posts=mongoose.models.posts||mongoose.model("posts",PostSchema);
export default Posts;