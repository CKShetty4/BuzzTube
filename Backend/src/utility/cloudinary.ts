import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: 'dkwluooep',
    api_key: '536699491245681',
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath: any) => {
    try {
        if (!localFilePath) return null
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return result

    } catch (error) {
        fs.unlinkSync(localFilePath)

        return null
    }
}

export default uploadOnCloudinary