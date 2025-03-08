import asyncHandler from "../utility/asyncHandler.js";
import ApiError from "../utility/apiErrors.js";
import { User } from "../models/user.model.js";
import { Request, Response } from "express";
import uploadOnCloudinary from '../utility/cloudinary.js';
import ApiResponses from "../utility/apiResponses.js";


const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { username, email, fullName, password } = req.body

    if ([username, email, fullName, password].some((feild) => feild?.trim() === '')) {
        throw new ApiError(400, "Please provide all required fields")
    }

    const existingUser = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (existingUser) {
        throw new ApiError(409, "User with username or email already exists")
    }

    let avatarPath, coverImagePath;
    if (Array.isArray(req.files)) {
        avatarPath = req.files[0]?.path;
        coverImagePath = req.files[1]?.path;
    } else {
        avatarPath = req.files?.avatar?.[0]?.path;
        coverImagePath = req.files?.coverImage?.[0]?.path;
    }
    

    if (!avatarPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarPath)
    const coverImage = await uploadOnCloudinary(coverImagePath)

    if (!avatar) {
        throw new ApiError(500, "Error uploading avatar")
    }

    const createdUser = await User.create(
        {
            username,
            email,
            fullName,
            password,
            avatar: avatar.url,
            coverImage: coverImage?.url
        }
    )

    /* to check if the user has been created 
    this is optional because of unwanted database calls*/

    const checkUser = await User.findById(createdUser._id).select("-password")

    if (!checkUser) {
        throw new ApiError(500, "Registration Failed")
    }

    res.status(201).json(
        new ApiResponses(201, checkUser, "Registration Succussful")
    )
})


export { registerUser }