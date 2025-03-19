import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'
const Header = () => {
  return (
    <div className='px-5 py-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-[150px] lg:w-[160px] xl:[180px]'/>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-sold border-black shadow-[-7px_7px_0px_#000000]'>Get Started<Image src={assets.arrow} /> </button>
        </div>

        <div className='text-center my-8'>
          <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti eaque qui, tempore libero officiis. Lorem ipsum dolor sit amet.</p>

          <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" placeholder='Enter your email' className='pl-4 outline-none w-full'/>
             <button type='submit' className=' border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
          </form>
         
        </div>
    </div>
  )
}

export default Header
