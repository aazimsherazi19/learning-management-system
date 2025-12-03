import { clerkClient } from '@clerk/express'
import {v2 as cloudinary} from 'cloudinary'
import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';
import User from '../models/User.js';

// update role to educator
export const updateRoleToEducator = async (req, res)=>{
    try {
        const userId = req.auth().userId;
        
       await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator'
            }
        })
      res.json({success: true, message: 'You can publish a course now'});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const addCourse = async (req, res)=>{
      try {
        const { courseData } = req.body;
        const imageFile = req.file;
        const educatorId = req.auth().userId;

        if(!imageFile){
            return res.json({success: false, message: 'Thumbnail not attached'});
        }
        const parsedCourseData = JSON.parse(courseData);
        parsedCourseData.educator = educatorId;
        const newCourse =await Course.create(parsedCourseData);
        const imageUpload = await cloudinary.uploader.upload(imageFile.path);
        newCourse.courseThumbnail = imageUpload.secure_url;
        await newCourse.save();
        res.json({success: true, message: 'Course added'});
      } catch (error) {
        res.json({success: false, message: error.message});
      }
}

export const getEducatorCourses = async (req, res)=>{
    try {
        const educatorId = req.auth().userId;
        const courses = await Course.find({ educator: educatorId });
        res.json({success: true, courses});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}


// Get Educator Dashboard data (Total earnings, enrolled students, no of courses)

export const getEducatorDashboardData = async (req, res)=> {
    try {
        const educatorId = req.auth().userId;
        const courses = await Course.find({educator: educatorId});
        let totalCourses = courses.length;

        const courseIds = courses.map(course=> course._id);

        const purchases = await Purchase.find({
            courseId: { $in: courseIds},
            status: 'completed'
        })

        const totalEarnings = purchases.reduce((sum, purchase)=> sum + purchase.amount, 0);

        // collect unique enrolled student ids with their course Titles
        const enrolledStudentsData = [];
        for (const course of courses){
           const students = await User.find({
                _id: {$in: course.enrolledStudents}
            }, 'name imageUrl')

            students.forEach(student=> (
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                })
            ))
        }
        res.json({success: true, dashboardData: {
            totalEarnings,
            totalCourses,
            enrolledStudentsData
        }})
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const getEnrolledStudentsData = async (req, res)=> {
    try {
        const educatorId = req.auth().userId;
        const courses  = await Course.find({educator: educatorId });
        const courseIds = courses.map((course)=> course._id);

        const purchases = await Purchase.find({
            courseId: {$in: courseIds},
            status: 'completed'
        }).populate('userId', 'name imageUrl').populate('courseId', 'courseTitle');

        const enrolledStudents = purchases.map((purchase)=> ({
            userId: purchase.userId,
            courseTitle: purchase.courseId.courseTitle,
            purchaseDate: purchase.createdAt
        }))
        res.json({success: true, enrolledStudents});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}