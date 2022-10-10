import React from 'react'
import { useRouter } from 'next/router';

const Pagination = ({postPerPage, totalPosts , paginate}) => {
    const router = useRouter()
    const pageNumbers = [];
    for(let i = 1 ;i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    }
    
  return (
    <ul className="pagination-wrap align-center mb-30 mt-30">
        {pageNumbers.map(num => (
            <li 
            key={num} 
            id={num}
            className={router.pathname == `/blog${num}` ? "active" : ""}>
                  <a onClick={() => paginate(num)} href={`#${num}`}>
                    {num}
                  </a>
            </li>
        ))}
                
    </ul>
  )
}

export default Pagination