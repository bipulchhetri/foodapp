import React from 'react'
import{FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from'react-icons/fa';
const Footer = () => {
  return (
    <div className='flex justify-around gap-4 max-w-[1640px] px-4 py-12 font-bold text-2xl bg-slate-500 cursor-pointer sm:text-lg md:text-lg'>
      <div className=' text-orange-500 font-bold text-2xl'>Foody Zone</div>
      <div className='font-bold text-xl text-white cursor-pointer' >
        <div className='text-orange-500 underline mb-2'>Menu</div>
        <div>Fast Food</div>
        <div>Pizza</div>
        <div>chicken</div>
      </div>
      <div className='font-bold text-xl text-white'>
      <div className='text-orange-500 underline mb-2'>Quick Link</div>
        <div>Orders</div>
        <div>Help</div>
      </div>
      <div className='font-bold text-xl text-white'>
      <div className='text-orange-500 underline mb-2 flex'>Social Media</div>
      <div className='grid gap-4 sm:grid grid-cols-2'>
      <FaFacebook/>
       <FaTwitter/>
      <FaLinkedin/>
       <FaInstagram/>
      </div>
      </div>

    </div>
   
  )
}

export default Footer
