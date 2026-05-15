import user_model from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{
    const {firstname,lastname,email,password} =req.body;
    try{
        bcrypt.genSalt(Number(process.env.SALT),(err,salt)=>{
            if(err) return res.status(500).json({message:"Internal server error"});
            bcrypt.hash(password,salt,async (err,hash)=>{
                if(err) return res.status(500).json({message:"Internal server error"});
                if(!hash) return res.status(400).json({message:"Password hashing failed"});
                const user = await user_model.create({
                    firstname,
                    lastname,
                    email,
                    password:hash
                });
                const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
                res.cookie("token",token)
               return res.status(201).json({message:"User registered successfully",user:user,token:token});
            })
        })
    }catch(err){
       return res.status(500).json({message:"Internal server error"});
    }
}

export const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const existingUser = await user_model.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User not found"});
        bcrypt.compare(password,existingUser.password,(err,isMatch)=>{
            if(err) return res.status(500).json({message:"Internal server error"});
            if(!isMatch) return res.status(400).json({message:"Invalid credentials"});
            const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1d"});
            res.cookie("token",token);
            return res.status(200).json({message:"Login successful",user:existingUser,token:token});
        })
    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
}