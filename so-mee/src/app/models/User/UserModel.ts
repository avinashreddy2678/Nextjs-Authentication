import mongoose from 'mongoose';


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    profileimg:{
        type:String,
    },
    posts:{
        type:Array
    }
})
const User=mongoose.models.users|| mongoose.model("users",UserSchema);
export default User;