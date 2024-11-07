import React from 'react';
import { FaTwitter ,FaInstagram , FaFacebook} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>
          <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            <div>
              <p className='font-medium tracking-wide'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Preferences</a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-medium tracking-wide text-black-200'>Apples</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>E-Commerce</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-medium tracking-wide text-black-200'>Cherry</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Monoprofit</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-medium tracking-wide text-black-200'>Business</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infoprenuer</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                </li>
                <li>
                  <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
            <p className='font-medium tracking-wide '>Subscribe for updates</p>
            <form className = 'mt-4 flex flex-col md:flex-row'>
                <input type = 'email' name='email' id='email' className = 'flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'></input>
                <button type = 'submit' className = 'inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
            </form>
            <p className = 'mt-4 text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ab voluptatibus incidunt ipsum sed? Alias molestias praesentium, laborum sequi qui, saepe aliquid in quia, autem omnis vel officia deserunt molestiae!
            Velit aliquid vitae ullam, beatae deleniti est! Cum maxime magnam soluta exercitationem. Sit voluptatum culpa aut quos incidunt facere eveniet unde beatae! Nesciunt, culpa debitis ipsum eaque corporis qui temporibus.</p>
          </div>
        </div>
        <div className = 'flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
            <p className = 'text-sm text-gray-500'>©Copyrights 2023 | All right reserved.</p>
            <div className = 'flex items-center mt-4 space-x-4 sm:mt-0'>
                <a href = '' className = 'text-gray-500 transition-all duration-300 hover:text-orange-400'><FaTwitter className = 'h-6 w-6'/></a>
                <a href = '' className = 'text-gray-500 transition-all duration-300 hover:text-orange-400'><FaInstagram className = 'h-6 w-6'/></a>
                <a href = '' className = 'text-gray-500 transition-all duration-300 hover:text-orange-400'><FaFacebook className = 'h-6 w-6'/></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

