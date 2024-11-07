import React from 'react'
import {useLoaderData} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
import Sidebar from '../components/Sidebar'

const SingleBlog = () => {
  const data = useLoaderData();
  const {title,image,category,author,published_date,reading_time,content} = data[0];
  return (
    <div>
         <div className=' py-40 bg-black text-white text-center px-4'>
         <h1 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>Single Blog Page</h1>
         </div>
         {/* Blog Details */}
         <div className = 'max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 px-20'>
            <div className = 'lg:w-3/4 mx-auto'>
                <div>
                    <img src = {image} className = 'w-full mx-auto rounded'/>
                </div>
                <h2 className = 'text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className = 'mb-3 text-gray-600'><FaUser className = 'inline-flex items-center mr-2'/>{author} | {published_date}</p>
                <p className = 'mb-3 text-gray-600'><FaClock className = 'inline-flex items-center mr-2'/>{reading_time}</p>
                <p className = 'text-base text-gray-500 mb-6'>{content}</p>
                <div className = 'text-base text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor obcaecati officiis, accusantium quia tempora optio rerum asperiores ratione tenetur voluptatum exercitationem cupiditate iste aliquid dicta. Quo consequatur perferendis est.</p>
                </div>
            </div>
            <div className = 'lg:w-1/2'>
                <Sidebar/>
            </div>
         </div>
    </div>
  )
}

export default SingleBlog