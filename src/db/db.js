import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo Database Connected");
    } catch (error) {
        console.log("Mongo DB Not Connected ", error);
        process.exit(1); //it's used to terminate the Node.js process with a failure code
    }
}

export default connectDB;