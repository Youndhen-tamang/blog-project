"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Page = () => {
  const [image, setImage] = useState(false)
  const imageRef = useRef();
  const [data,setData] = useState({
    title:"",
    description:"",
    category:'startup',
    author:"Alex Bennethe",
    authorImg:"/author_Img.png"
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
    console.log(data)
  }
  const onSubmithandler = async(e)=>{
    e.preventDefault();
    const formData  = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description)
    formData.append('category',data.category)
    formData.append('author',data.author)
    formData.append('authorImg',data.authorImg)
    if (!image) {
      toast.error("Please select an image.");
      return;
    }
    formData.append("image", image);
    
    const response  = await axios.post('/api/blog',formData)
    if(response.data.success){
      toast.success(response.data.msg)
      setImage(false);
      setData({
        title:"",
        description:"",
        category:'startup',
        author:"Alex Bennethe",
        authorImg:"/author_Img.png"
      })
    } else{ 
      toast.error("Error");
    }
  }
  return (
    <>
      <form onSubmit={onSubmithandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image ? assets.upload_area:URL.createObjectURL(image)} width={140}  height={70} alt=''  style={{ width: "auto", height: "auto" }}/>
        </label>
        <input onChange={(e)=>{
          setImage(e.target.files[0])
        }} type="file" id="image" name="image" hidden required />

        <p className='text-xl mt-4 '>Blog title</p>
        <input type="text" placeholder='Type here' required name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border outline-black'/>
        <p className='text-xl mt-4 '>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Write content here' required rows={6} className='w-full sm:w-[500px] mt-4 px-4 py-3 border outline-black'/>
        <p className='text-xl mt-4'>
          Blog Category
        </p>
        <select name="category" className='border border-gray-500 border-1 w-40 mt-4 px-4 py-3 outline-none' onChange={onChangeHandler} value={data.category}>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Post</button>
      </form>
    </>
  )
}

export default Page 
