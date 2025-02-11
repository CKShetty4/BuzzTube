import connectDB from "./db/connect.js"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT|| 8000, () => {
            console.log(`Server connected to port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error("MongoDB not connected", err);

    })
