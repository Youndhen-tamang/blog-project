import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from 'fs/promises'
import { title } from "process";
const { NextResponse } = require("next/server");

const loadDB = async ()=>{
  await connectDB();
}
loadDB();
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if(blogId){
    const blogs = await BlogModel.findById(blogId);
    return NextResponse.json(blogs)
  }
  else{
    const blogs = await BlogModel.find({});
    console.log("Blog GET Hit");
    return NextResponse.json({blogs})
  }
  
  
}


export async function POST(request) {
  
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path,buffer);
  const imageUrl = `/${timestamp}_${image.name}`;
  console.log(imageUrl);

  const blogData = {
    title:`${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category:`${formData.get('category')}`,
     author:`${formData.get('author')}`,
     image:`${imageUrl}`,
     authorImg:`${formData.get('authorImage')}`
  }

  await BlogModel.create(blogData);
  console.log("Blog saved")
  return NextResponse.json({success:true,msg:"Blog Added"})
}