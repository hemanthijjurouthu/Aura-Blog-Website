import React from 'react'
import Blogpage from '../components/Blogpage'

const Blogs = () => {
  return (
    <>
    <div>
      <div className=' py-40 bg-black text-white text-center'>
      <h1 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>welcome to blog page</h1>
      </div>
    </div>
    {/* blog content */}
    <div className='max-w-7xl mx-auto'>
      <Blogpage/>
    </div>
    </>
  
  )
}

export default Blogs