
import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>welcome to blog</h1>
             <p className='text-gray-200 lg:w-3/5 mx-auto mb-5' >start your blog today and loin a community of writers hgdsgdg fgrbf dgbfy grb rybdgf fydf f and readers who are passionate about sharinn their ideas and stories.</p>
             <div>
                <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center py-1">Learn more<FaArrowRight className='mt-1 ml-2'/></Link>
             </div>
        </div>
    </div>
  )
}

export default Banner