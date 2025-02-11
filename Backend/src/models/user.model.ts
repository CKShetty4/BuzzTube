import mongoose, { Document,Model, Schema } from "mongoose";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"

interface IUser extends Document {
    username: string;
    email: string;
    fullName: string;
    avatar: string;
    coverImage?: string;
    watchHistory: mongoose.Types.ObjectId[];
    password: string;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()

})

userSchema.methods.isPasswordCorrect = async function (password:string) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function ():Promise<string> {
    return await Jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET as string,
        {
            // expiresIn:1
            expiresIn:Number(process.env.ACCESS_TOKEN_EXPIRY)
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return await Jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET as string,
        {
            expiresIn:Number(process.env.REFRESH_TOKEN_EXPIRY)
        }
    )
}

export const User:Model<IUser> = mongoose.model<IUser>("User", userSchema)