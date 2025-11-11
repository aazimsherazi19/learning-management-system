import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const {isEducator} = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon},
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon},
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon},
    { name: 'Students Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon},
  ]
  return isEducator &&(
    <div className='md:w-64 w-16 border-r border-gray-500 text-base min-h-screen flex flex-col py-2'>
      {menuItems.map((item)=> (
        <NavLink 
        to={item.path} 
        key={item.name} 
        end={item.path === '/educator'}
        className={({isActive})=> `flex md:flex-row flex-col items-center md:justify-start justify-center md:px-10 py-3.5 gap-3 ${isActive ? 'bg-indigo-50 border-r-[6px] border-indigo-500/90' : 'hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray-100/90'}`} 
        >
          <img src={item.icon} alt="" className='w-6 h-6'/>
          <p className='hidden text-center md:block'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
