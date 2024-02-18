import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

export const signup=async (req,res,next)=>{

    const {username,email,password,bloodgroup,state,city,mobile}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashPassword,bloodgroup,state,city,mobile});
  try {
    await newUser.save()
    res.status(201).json("user created suceesfully")
  } catch (error) {
    next(error)
  }
 
}

export  const signin=async(req,res,next)=>{
  const {email,password}=req.body
  console.log(email);
  try {
   const validUser=await User.findOne({ email })
   if(!validUser){
    return next(errorHandler(404,"user not found"))
   }
   const validPassword=bcryptjs.compareSync(password,validUser.password)
   if(!validPassword){return next(errorHandler(401,"wrong credetionals"))}
    const token=Jwt.sign({
      id:validUser._id
    },
    process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res.cookie('access_token',token,{httpOnly:true})
    .status(200)
    .json(rest)
    
  } catch (error) {
    next(error)
  }
}


// export const google=async(req,res,next)=>{
//   try {
//     const user=await User.findOne({email:req.body.email})
//     if(user){
//       const token=Jwt.sign({id:user._id},process.env.JWT_SECRET);
//       const {password :pass, ...rest}=user._doc
//       res.cookie("access_token",token,{httpOnly:true})
//       .status(200)
//       .json(rest);
//     }else{
//        const generatePasssword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
//        const hashedPassword=bcryptjs.hashSync(generatePasssword,10);
//        const newUser=new User({username:req.body.name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-8),email:req.body.email,password:hashedPassword,avatar:req.body.photo})
//        await newUser.save();
//        const token=Jwt.sign({id:newUser._id},process.env.JWT_SECRET)
//        const {password :pass, ...rest}=newUser._doc;
//       res.cookie('access_token',token,{httpOnly:true})
//       .status(200)
//       .json(rest);
//     }
    
//   } catch (error) {
//     next(error)
//   }
// }

export const signout=async(req,res,next)=>{
  try {
     res.clearCookie('access_token');
     res.status(200).json('user has been looged out')
  } catch (error) {
     next(error);
  }
}