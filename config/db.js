import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongo Db ${conn.connection.host}`.bgMagenta.white);
    }catch(error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white)
    }
};

export default connectDB;