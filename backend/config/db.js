import mongoose, { mongo } from "mongoose";
//.env was loaded into proccess.env within serverjs

const connectDB = async () => {
    console.log("dbjs; before await mongoose.connect");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`dbjs;MongoDB connected ${conn.connection.host}`);
    } catch(error) {
        console.error(`dbjs;error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
/**
 Connection ready state

0 = disconnected
1 = connected
2 = connecting
3 = disconnecting
99= uninitialized
 */