import { useState } from 'react'
import React from 'react'
import { assets } from '../../assets/assets'
import {useNavigate} from 'react-router-dom'

const SearchBar = ({data}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '');

    const searchHandler = (e)=>{
      e.preventDefault();
      navigate('/course-list/' + input);
    }

  return (
      <form onSubmit={searchHandler} className='max-w-xl w-full flex items-center md:h-14 h-12 bg-white border border-gray-500/20 rounded'>
        <img className='md:w-auto w-10 px-3' src={assets.search_icon} alt="" />
        <input onChange={(e)=> setInput(e.target.value)} value={input} className='w-full h-full outline-none text-gray-500/80' type="text" placeholder='Search for courses' />
        <button type='submit' className='px-7 md:px-10 py-2 md:py-3 bg-blue-600 text-white text-sm cursor-pointer rounded mx-1'>Search</button>
      </form>
  )
}

export default SearchBar
