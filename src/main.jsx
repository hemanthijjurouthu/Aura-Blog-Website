import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs.jsx'
import Contacts from './pages/Contacts.jsx'
import Service from './pages/Service.jsx'
import SingleBlog from './pages/SingleBlog.jsx'

const router = createBrowserRouter([{
     
  path:"/",
   element:<App/>,
   children:[
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/blogs",
      element:<Blogs/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contacts",
      element:<Contacts/>
    },
    {
      path:"/service",
      element:<Service/>
    },
    {
      path:"/blogs/:id",
      element:<SingleBlog/>,
      loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
    }
   ]

},]);
    


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
