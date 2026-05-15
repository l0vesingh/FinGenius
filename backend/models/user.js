import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
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
    mutualFunds:[
        {
            fundname:{
                type:String,
            },
            fundvalue:{
                type:Number,
            },
            fundunits:{
                type:Number,
            },
            fundid:{
                type:String,
            },
        }

    ],
    stocks:[
        {
            stockname:{
                type:String,
            },
            stockvalue:{
                type:Number,
            },
            stockunits:{
                type:Number,
            },
            stockid:{
                type:String,
            },
        }
    ],
},
{
    timestamps:true,
});

export default mongoose.model("user", userSchema);