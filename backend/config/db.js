import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.ConnectionStates} 
          ${conn.connection.host} to ${conn.connection.db}`);
    } catch(error) {
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;