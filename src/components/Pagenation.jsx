import React from 'react'

const Pagenation = ({onPageChange,currentpage, blogs,pagesize}) => {
  const totalpages=Math.ceil(blogs.length / pagesize);
 
  const renderPagination=()=>{
    return Array.from({length:totalpages},(_, i)=>i+1).map((pagenumber)=>(
      <li className={pagenumber === currentpage ? "activepagination":""} key={pagenumber}>
        <a href="#" onClick={()=> {onPageChange(pagenumber)}}>{pagenumber}</a>
      </li>
    ));
  };
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button>Prev</button>
      </li>
      <div className='page'>{renderPagination()}</div>
      <li>
        <button>Next</button>
      </li>
    </ul>
  )
}

export default Pagenation