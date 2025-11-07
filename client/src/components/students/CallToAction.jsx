import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center  pt-10 pb-24 px-8 md:px-0 gap-4'>
      <h1 className='md:text-4xl text-xl font-bold text-gray-900'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea</p>
      <div className='flex items-center gap-4 mt-4'>
        <button className='text-white bg-blue-500 font-medium px-4 text-sm md:text-base md:px-8 md:py-3 py-2 rounded-md cursor-pointer'>Get started</button>
        <button className='text-black bg-white font-medium px-4 text-sm md:text-base md:px-8 md:py-3 py-2 rounded-md cursor-pointer'>Learn more <img className='inline-block ml-1' src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default CallToAction
