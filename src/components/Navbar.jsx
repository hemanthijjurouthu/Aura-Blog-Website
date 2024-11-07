import React , {useState} from 'react'

import { NavLink } from 'react-router-dom'
import { FaFacebook, FaXmark } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import Modal from '../components/Modal'

const Navbar = () => {
    const [ismenuopen,setmenuopen]=useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)
    const navitems=[
        
            {path:"/home",link:"Home"},
            {path:"/service",link:"Service"},
            {path:"/about",link:"About"},
            {path:"/blogs",link:"Blogs"},
            {path:"/contacts",link:"Contacts"},
        
    ]
    const togglemenu=()=>(
        setmenuopen(!ismenuopen)
    )
    //modal details
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
  return (
    <>
    <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className='px-4 py-4 flex justify-between items-center mx-auto max-w-7xl'>
            <a href="/" className="text-xl font-bold text-white">Design<span className="text-orange-500">OK</span></a>
        
        <ul className='md:flex gap-12 text-lg items-center hidden'>
            {navitems.map(({path,link})=><li className='text-white mb-3' key={path}>
                <NavLink  className={({isActive,isPending})=>
            isActive
                ? "active"
                :isPending
                ?"pending"
                :""
            } to={path}>{link}</NavLink>
            </li>)}


            
        </ul>
        {/* menu items */}
        <div className='text-white lg:flex gap-4 items-center hidden '>
            <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
            <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
            <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
            <button onClick = {openModal} className='bg-orange-500 py-2 px-6 font-medium rounded hover:bg-white hover:text-black transition-all duration-200 ease-in'>Log In</button>
        </div>

        {/* our modal component is here */}
        <Modal isOpen = {isModalOpen} onClose = {closeModal} />
        {/* mobile menu icon
         */}
        <div className='md:hidden'>
            <button className='cursor-pointer ' onClick={togglemenu}>
            {
                ismenuopen?<FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>
            }
            </button>
        </div>
        </nav>

        {/* menu items for mobile phones */}
        <div >
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${ismenuopen?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>
            {navitems.map(({path,link})=><li className='text-black mb-3' key={path}>
                <NavLink onClick={togglemenu}to={path}>{link}</NavLink>
            </li>)}   
        </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar