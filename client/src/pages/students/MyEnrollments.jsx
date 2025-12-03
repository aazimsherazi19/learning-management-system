import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress'
import Footer from '../../components/students/Footer'
import { toast } from 'react-toastify'
import axios from 'axios'

const MyEnrollments = () => {
  const {enrolledCourses, calculateCourseTime, navigate, userData, fetchUserEnrolledCourses, backendUrl, getToken, calculateNoOfLectures} = useContext(AppContext);
  const [progressArray, setProgressArray] = useState([]);

  const getCourseProgress = async ()=> {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course)=> {
        const {data} = await axios.post(backendUrl + '/api/user/get-course-progress', {courseId: course._id}, {headers: {Authorization: `Bearer ${token}`}});
        let totalLectures = calculateNoOfLectures(course);
        const lectureCompleted = data.progressData ? data.progressData.lectureCompleted.length : 0;
        return {totalLectures, lectureCompleted}
      })
      );

      setProgressArray(tempProgressArray);

    } catch (error) {
      toast.error(error.message);
    }
  } 

    useEffect(()=>{
    if(userData){
     fetchUserEnrolledCourses();
    }  
  }, [userData])

  useEffect(()=>{
    if(enrolledCourses.length > 0){
      getCourseProgress();
    }
  }, [enrolledCourses])


  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
      <h2 className='text-2xl font-semibold'>My Enrollments</h2>
      <table className='md:table-auto table-fixed mt-10 border border-gray-500/20 w-full overflow-hidden'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr >
            <th className='px-4 py-3 font-semibold truncate'>Course</th>
            <th className='px-4 py-3 font-semibold truncate'>Duration</th>
            <th className='px-4 py-3 font-semibold truncate'>Completed</th>
            <th className='px-4 py-3 font-semibold truncate'>Status</th>
          </tr>
        </thead>

        <tbody>
          {enrolledCourses.map((course, index)=> (
            <tr className='border-b border-gray-500/20'>
              <td className='md:px-4 md:pl-4 pl-2 py-3 flex items-center space-x-3'>
                <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28'/>
                <div className='flex-1'>
                  <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                  <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted / progressArray[index].totalLectures) * 100 : 0} className='bg-gray-300 rounded-full'/>
                </div>
              </td>
              <td className='max-sm:hidden px-4 py-3'>
                {calculateCourseTime(course)}
              </td>
              <td className='max-sm:hidden px-4 py-3'>
              {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} <span>Lectures</span>
              </td>

              <td className='max-sm:text-right px-4 py-3'>
                <button className='px-3 sm:px-5 py-1.5 sm:py-2 max-sm:text-xs bg-blue-600 text-white'
                onClick={()=> navigate('/player/' + course._id)}
                >
                  {progressArray[index] && `${progressArray[index].lectureCompleted === progressArray[index].totalLectures ? 'Completed' : 'On Going'}`}
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  )
}

export default MyEnrollments
