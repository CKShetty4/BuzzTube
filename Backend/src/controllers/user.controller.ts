import asyncHandler from "../utility/asyncHandler.js";

const registerUser =asyncHandler(async(req,res)=>{
    res.status(200).json({
        username:"a",
        email:""
    })
})

export  {registerUser}