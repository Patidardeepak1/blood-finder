import mongoose, { Schema } from "mongoose";
const userSchema=new Schema({
    username:{
      type:String,
      required:true,
      unique:true,  
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    bloodgroup:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }

},{timestamps:true})


 const User =mongoose.model("User",userSchema)

 export default User
