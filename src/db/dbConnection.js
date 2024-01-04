import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export default async function ConnectDatabase(){
    try {
            const dbInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            console.log("database connected",dbInstance.connection.host);

    } catch (error) {
        console.log("Database connection error");
        process.exit(1);
    }
}