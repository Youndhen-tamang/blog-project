import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://YoundhenBlog:Blog123@cluster0.hts8c.mongodb.net/blog-app')
  console.log("DB connected ")
}
