import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {dummyStudentEnrolled} from './../../assets/assets' 
import Loading from '../../components/students/Loading';
import axios from 'axios';

const StudentsEnrolled = () => {
  const {backendUrl, getToken, isEducator} = useContext(AppContext)
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchStudents = async ()=>{
   try {
    const token = await getToken();
    const {data} = await axios.get(backendUrl + '/api/educator/enrolled-students', {headers: {Authorization: `Bearer ${token}`}});
    if(data.success){
      setEnrolledStudents(data.enrolledStudents.reverse())
    } else {
      toast.error(data.message);
    }
   } catch (error) {
    toast.error(error.message);
   }
  }

  useEffect(()=>{
    if(isEducator){
      fetchStudents();
    }
  },[isEducator])

  return enrolledStudents ? (
    <div className='h-screen flex flex-col items-start md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='flex flex-col items-center max-w-4xl w-full bg-white border border-gray-500/20 rounded-md'>
        <table className='md:table-auto table-fixed w-full overflow-hidden'>
        <thead className='text-gray-900 text-left text-sm border-b border-gray-500/20'>
        <tr>
          <th className='px-2 md:px-4 py-3 font-semibold truncate text-center hidden sm:table-cell'>#</th>
          <th className='px-2 md:px-4 py-3  font-semibold truncate'>Student Name</th>
          <th className='px-2 md:px-4 py-3 font-semibold truncate'>Course Title</th>
          <th className='px-2 md:px-4 py-3 font-semibold truncate hidden sm:table-cell'>Date</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((item, index)=>(
            <tr key={index} className='border-b border-gray-500/20'>
             <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
             <td className='flex items-center space-x-3 md:px-4 px-2 py-3 '>
              <img src={item.userId.imageUrl} alt="" className='w-9 h-9 rounded-full hidden md:block'/>
              <p className='truncate'>{item.userId.name}</p>
             </td>
             <td className='px-4 py-3 truncate'>
              {item.courseTitle}
             </td>
             <td className='px-4 py-3 hidden sm:table-cell'>
              {new Date(item.purchaseDate).toLocaleDateString()}
             </td>

            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
}

export default StudentsEnrolled
