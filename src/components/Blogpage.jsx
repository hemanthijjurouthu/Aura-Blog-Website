import React, { act } from 'react'
import { useState,useEffect } from 'react'
import Blogcards from './Blogcards';
import Pagenation from './Pagenation';
import Categoryselection from './Categoryselection';
import Sidebar from '../components/Sidebar';

const Blogpage = () => {
  const [blogs,setblogs]=useState([]);
  const [currentpage,setcurrentpage]=useState(1);
  const pagesize=12;
  const [selectedcategory,setselectedcategory]=useState(null);
  const [activecategory,setactivecategory]=useState(null);


  useEffect(()=>{
    async function fetchblogs(){
    let url=`http://localhost:5000/blogs?page=${currentpage}&limit=${pagesize}`;
       
    /*filter by category
     */
    if(selectedcategory){
      url+=`&category=${selectedcategory}`;
      console.log(url);
    }
    const response=await fetch(url);
    const data=await response.json();
   
    setblogs(data);
    }
    fetchblogs();
   
  },[currentpage,pagesize,selectedcategory])

  const handlepagechange=(pagenumber)=>{
    setcurrentpage(pagenumber)
  }

  const handlecategorychange=(category)=>{
    setselectedcategory(category);
    setcurrentpage(1);
    setactivecategory(category);

  }
  return (
    <div>

      <div>
        <Categoryselection onSelectCategory={handlecategorychange} activecategory={activecategory}/>
      </div>

      {/* blogpage card section */}

      <div className = 'flex flex-col lg:flex-row gap-12'>
        <Blogcards blogs={blogs} currentpage={currentpage} selectedcategory={selectedcategory} pagesize={pagesize}/>

        {/* sidebar menu */}
        <div>
          <Sidebar/>
        </div>
      </div>

      {/* pagenation section */}

      <div>
        <Pagenation onPageChange={handlepagechange} currentpage={currentpage} blogs={blogs} pagesize={pagesize} />
      </div>
    </div>
  )
}

export default Blogpage