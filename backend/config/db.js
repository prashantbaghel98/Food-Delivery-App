import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://prashantbaghel98:Prashant123@cluster0.trnhr.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}