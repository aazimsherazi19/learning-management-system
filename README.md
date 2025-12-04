# 🎓 Learning-management-system(LMS) 


A **full-stack Learning Management System (LMS)** built using the MERN stack.
It includes **Clerk authentication, course enrollment, video lectures, educator dashboard, progress tracking, and Stripe payment integration**.

---

## 📸 Screenshots

![Home Page](./screenshots/homepage.png)  
![Product Page](./screenshots/productpage.png)  
![Cart Page](./screenshots/cart.png)  
![Admin Panel](./screenshots/adminpanel_addItem.png)

---

### ✨ Features
## 👨‍🎓 For Students

- 🔐 Login & Signup using Clerk Authentication
- 🌐 Browse all published courses
- 💳 Enroll in any course using Stripe Checkout
- 🎬 Watch video lectures
- ✔ Mark lectures as complete
- 📊 Track course progress with a progress bar
- ⭐ Rate & review courses
- 📁 View purchased courses inside My Enrollments
- 📱 Fully responsive UI


## 👨‍🏫 For Educators

- 🧑‍🏫 Any user can click Become Educator
  → This updates Clerk public metadata to role="educator"
- 📚 Upload new courses
- 🎥 Add lectures (title, description, video URL)

# 📈 Educator Dashboard shows:

- Total uploaded courses
- Total enrolled students
- Total earnings
- 🧾 View enrolled students
- 🛠️ Edit or delete courses
- 💳 Stripe Payment Flow
- Student clicks Enroll
- Stripe Checkout opens

# On successful payment:

- Enrollment record is created
- Course gets mapped to the student
- Lecture progress initializes
- Student gets instant access

---

## 🛠️ Tech Stack

| Layer        | Technology |
|--------------|------------|
| **Frontend** | React, Tailwind CSS |
| **Backend**  | Node.js, Express |
| **Database** | MongoDB (Mongoose) |
| **Auth**     | Clerk Authentication (No JWT)|
| **Payments** | Stripe Checkout |
| **Other**    | REST API, dotenv, Cloudinary, etc. |

---

## 📂 Project Structure

```

learning-management-system/
│
├── server/               # Backend server / API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── server.js
│
├── client/               # React frontend
│   ├── src/components/
│   ├── src/pages/
│   ├── src/context/
│   ├── src/utils/
│   └── App.jsx
│
├── screenshots/
├── README.md
└── .gitignore
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js installed
- MongoDB Atlas/local connection
- Clerk dashboard configured
- Stripe account

### Backend Setup
```bash
cd backend
npm install
```



Create `.env` file inside `server/`:
```
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
```bash
npm run dev
```
Backend will run at → http://localhost:3000

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open your browser →  👉 'http://localhost:5173' 

---

## 📡 API Endpoints

# 📌 User Routes

| Method   | Route                              | Description                       |
| -------- | ---------------------------------- | --------------------------------- |
| **GET**  | `/api/user/data`                   | Get user data                     |
| **GET**  | `/api/user/enrolled-courses`       | Get all enrolled courses          |
| **POST** | `/api/user/purchase`               | Purchase a course                 |
| **POST** | `/api/user/update-course-progress` | Update user’s course progress     |
| **POST** | `/api/user/get-course-progress`    | Get progress of a specific course |
| **POST** | `/api/user/add-rating`             | Add user rating to a course       |

# 🎓 Educator Routes

| Method   | Route                             | Description                               |
| -------- | --------------------------------- | ----------------------------------------- |
| **POST** | `/api/educator/update-role`       | Update user role to educator              |
| **POST** | `/api/educator/add-course`        | Add a new course (with thumbnail upload)  |
| **GET**  | `/api/educator/my-courses`        | Get educator’s created courses            |
| **GET**  | `/api/educator/dashboard-data`    | Get educator earnings + stats             |
| **GET**  | `/api/educator/enrolled-students` | Get enrolled students with course details |

# 📚 Course Routes

| Method  | Route              | Description      |
| ------- | ------------------ | ---------------- |
| **GET** | `/api/courses/all` | Get all courses  |
| **GET** | `/api/courses/:id` | Get course by ID |

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repo  
2. Create your branch (`git checkout -b feature/YourFeature`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push branch (`git push origin feature/YourFeature`)  
5. Create a Pull Request  

---

## 👤 Author

**Aazim Sherazi**

- GitHub: [@aazimsherazi19](https://github.com/aazimsherazi19)
- Repository: [Learning management system](https://github.com/aazimsherazi19/learning-management-system)
- Live App: [Learning management system](https://learning-management-system-zeta-coral.vercel.app/)  
