import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { blog_data } from '@/Assets/assets';
import BlogModel from '@/lib/models/BlogModel';
import { NextResponse } from 'next/server';
const BlogList = () => {
  
  const [menu,setMenu] = useState('ALL');
  const [blogs,setBlogs] = useState([])
  const fetchBlogs = async()=>{
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
      console.log(blogs)
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    
  }

  useEffect(()=>{
    fetchBlogs();
  },[]);
  
  return (
    <div >
     <div className='flex justify-center gap-6 my-10 '>
      <button className={`${menu==="ALL" ?"bg-black text-white py-1 px-4 rounded-sm":""}`} onClick={()=>setMenu("ALL")}>All</button>
      <button className={`${menu==="Technology" ?"bg-black text-white py-1 px-4 rounded-sm":""}`} onClick={()=>setMenu("Technology")}>Technology</button>
      <button className={`${menu==="Startup" ?"bg-black text-white py-1 px-4 rounded-sm":""}`} onClick={()=>setMenu("Startup")}>Startup</button>
      <button className={`${menu==="Lifestyle" ?"bg-black text-white py-1 px-4 rounded-sm":""}`} onClick={()=>setMenu("Lifestyle")}>Lifestyle</button>
     </div>

     <div className='flex flex-wrap justify-around gap-2 gap-y-10 mb-16 xl:mx-24'>
      {
        blog_data.filter((item)=>menu === "ALL"?"true":item.category === menu).map((item,index)=>{
          console.log(item.category)
          return <BlogItem key={item.id} title={item.title} image={item.image} description={item.description} category={item.category} id={item.id} />
        })
      }
     </div>
    </div>
  )
}

export default BlogList
