📚 Kasempa School Management System
#A School Management System built with Node.js, Express, MongoDB, and Postman for API testing. This system handles user registration, login, and will eventually support full school operations like managing students, teachers, courses, and grades.

🚀 Features
✅ User Registration (Student, Teacher, Admin)

✅ JSON Web Token (JWT) Authentication

✅ Secure Password Storage (bcrypt)

✅ MongoDB Atlas Database Connection

✅ Environment Variable Configuration with dotenv

✅ REST API tested with Postman

✅ Backend built with Express

🛠️ Technologies Used
Node.js

Express.js

MongoDB Atlas

Mongoose

bcryptjs

jsonwebtoken

dotenv

Postman (API testing)

GitHub (Version control)

📂 Project Structure
kasempa-school-management-system/
│
├── backend/
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── controllers/
│   │   └── userController.js
│   ├── server.js
│   └── .env
│
├── frontend/ (to be developed)
│
├── .gitignore
├── package.json
├── README.md
└── LICENSE
⚙️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/kasempa-school-management-system.git
2. Navigate to Backend Folder
cd kasempa-school-management-system/backend
3. Install Backend Dependencies
npm install
4. Create .env File
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
5. Run the Server
npm run dev
Server should respond:

Server running on port 5000
MongoDB connected
🧪 API Testing
Use Postman to test the API endpoints.

POST /api/users/register
Request Body:
{
    "name": "Focus Lyangenda",
    "email": "focus@example.com",
    "password": "123456"
}
Response:
{
    "token": "jwt-token",
    "user": {
        "id": "user_id",
        "name": "Focus Lyangenda",
        "email": "focus@example.com",
        "role": "Student"
    }
}
✅ To Do
 Add Login Endpoint

 Build User Role Access (Admin, Teacher, Student)

 Develop Course Management

 Develop Attendance Tracking

 Connect React Frontend

 Build UI for User Authentication

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Special thanks to Chisenatambu Lyangenda for leading this project and to all contributors who will support the system's growth.
