🎓 Learning Management System (LMS)












A full-stack Learning Management System built with MERN Stack, Clerk Authentication & Stripe Payments.
This LMS includes course enrollment, instructor dashboard, progress tracking, dedicated student area, and course creation tools.

📸 Screenshots

Replace with real screenshots:












✨ Features
👨‍🎓 For Students

🔐 Login & Signup using Clerk Authentication

🌐 Browse all published courses

💳 Secure Stripe Checkout for enrollment

🎬 Watch video lectures

✔ Mark lectures as complete

📊 Progress tracking with completion bar

⭐ Rate & Review courses

📁 My Enrollments section

📱 Fully responsive UI

👨‍🏫 For Educators

🧑‍🏫 Any user can become educator using Become Educator button
→ This sets role="educator" in Clerk public metadata

📚 Upload new courses

🎥 Add lectures with title, description, video URL

📈 Educator Dashboard showing:

Total courses uploaded

Total students

Total earnings

🧾 See enrolled students

🛠️ Edit or delete courses

💳 Stripe Payment Flow

Student buys a course

Stripe Checkout opens

On successful payment:

Enrollment record created

Course mapped to the user

Progress initialized

Student instantly gets full access

🛠️ Tech Stack
Layer	Technology
Frontend	React, Tailwind CSS, React Router
Backend	Node.js, Express
Database	MongoDB + Mongoose
Authentication	Clerk (No JWT)
Payments	Stripe Checkout
Other	Cloudinary, REST API, dotenv
📂 Project Structure
learning-management-system/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── server.js
│
├── frontend/
│   ├── src/components/
│   ├── src/pages/
│   ├── src/context/
│   ├── src/utils/
│   └── App.jsx
│
├── screenshots/
├── README.md
└── .gitignore

🚀 Installation & Setup
Prerequisites

Node.js installed

MongoDB (Atlas or local)

Clerk account configured

Stripe account

Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongo_url
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloud_key
CLOUDINARY_API_SECRET=your_cloud_secret


Run backend:

npm run dev

Frontend Setup
cd frontend
npm install
npm run dev


Open your browser →
👉 http://localhost:5173

📡 API Endpoints
Method	Route	Description
GET	/api/courses/list	Get all published courses
POST	/api/courses/upload	Upload a new course (educator only)
POST	/api/payments/checkout	Create Stripe checkout session
POST	/api/payments/verify	Verify Stripe payment
GET	/api/enrollments/my-courses	Fetch enrolled courses
POST	/api/progress/update	Update lecture progress
🤝 Contributing

Contributions are always welcome!

Fork the repo

Create your feature branch

Commit your changes

Push to your branch

Open a pull request

👤 Author

Aazim Sherazi

GitHub: @aazimsherazi19

Live App: https://learning-management-system-zeta-coral.vercel.app/

Repository: https://github.com/aazimsherazi19/learning-management-system
