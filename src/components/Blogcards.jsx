import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
const Blogcards = ({blogs,currentpage,selectedcategory,pagesize}) => {
    const filterblogs=blogs.filter((blogs)=>!selectedcategory || blogs.category=== selectedcategory).slice((currentpage-1)*pagesize,currentpage*pagesize);
    
  return (
    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-3'>{
        filterblogs.map((blog)=><Link to = {`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <div>   
            <img src={blog.image} alt="img" className='w-full'/>
            <h2 className='mt-4 mb-4 font-bold hover:text-blue-600'>{blog.title}</h2>
            <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center cursor-pointer'/>{blog.author}</p>
            <p className='mb-2 text-gray-600 text-sm'>Published:{blog.published_date}</p>
            </div>
        </Link>)
    }</div>
  )
}

export default Blogcards