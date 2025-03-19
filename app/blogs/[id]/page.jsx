"use client"
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = ({params}) => {
  const [data,setData] = useState(blog_data);

  function fetchBlogData() {
    blog_data.map((item)=>{
      if(item.id == params.id){
        setData(item);
      }
    }
    ) 
  }

  useEffect(()=>{
    fetchBlogData();
  },[])
  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
      <div className='flex justify-between items-ceter'>
        <Link href='/'>
        <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-[140px] md:w-[150px]  xl:w-[170px]'/>
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=''/> </button>
      </div>
      
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>

        <Image src={data.author_img} alt='' width={60} height={60} className='mx-auto mt-6 border border-white rounded-full '/>
        <p className='text-lg max-w-[740px] mx-auto mt-1 pb-2 '>{data.author}</p>

      </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image src={data.image} alt='' width={1280} height={720} className='border-4 border-white '/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step:1 Self-Reflection and Goal Setting</h3>
      <p className='my-3'> Self-reflection involves taking time to deeply assess your current situation, strengths, weaknesses, and areas for improvement.</p>
      <p className='my-3'>It is an introspective process where you evaluate your experiences, choices, and values. Here’s how to go about it:</p>

      <h3 className='my-5 text-[18px] font-semibold'>Step:2 Self-Reflection and Goal Setting</h3>
      <p className='my-3'> Self-reflection involves taking time to deeply assess your current situation, strengths, weaknesses, and areas for improvement.</p>
      <p className='my-3'>It is an introspective process where you evaluate your experiences, choices, and values. Here’s how to go about it:</p>

      <h3 className='my-5 text-[18px] font-semibold'>Step:3 Self-Reflection and Goal Setting</h3>
      <p className='my-3'> Self-reflection involves taking time to deeply assess your current situation, strengths, weaknesses, and areas for improvement.</p>
      <p className='my-3'>It is an introspective process where you evaluate your experiences, choices, and values. Here’s how to go about it:</p>

      <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
      <p className='my-3'>Self-reflection helps you evaluate your current state, identify strengths and weaknesses, and align with your values, while goal setting provides a clear, actionable path to personal and professional growth. By setting SMART goals, prioritizing tasks, and staying accountable, you can achieve meaningful progress and success.</p>

      <div className='my-24 '>
        <p className='text-black font-semibold my-4'>Share this article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} alt='' width={50} className='cursor-pointer'/>
          <Image src={assets.twitter_icon} alt='' width={50} className='cursor-pointer'/>
          <Image src={assets.googleplus_icon} alt='' width={50} className='cursor-pointer'/>
        </div>
      </div>
    </div>

    <Footer/>
    </>:<></>
  )
}

export default Page
