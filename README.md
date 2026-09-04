# Task Management API

A REST API for managing tasks with user authentication.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Postman
- Git and GitHub

## Features

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Create tasks
- View tasks
- Update tasks
- Delete tasks
- User-specific task management
- MongoDB database integration

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get user's tasks |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

Task endpoints require JWT authentication.

## Authentication

After successful login, the API returns a JWT token.

Use the token in Postman:

```text
Authorization: Bearer YOUR_JWT_TOKEN
## How to Run

Clone the repository:

git clone https://github.com/TejasPratapSingh-891/task-management-api.git

Go to the project folder:

cd task-management-api

Install dependencies:

npm install

Create a `.env` file in the project root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:

node server.js

The API will run at:

http://localhost:5000

Testing

The API endpoints were tested using Postman, including:

User registration
User login
JWT authentication
Create task
Get tasks
Update task
Delete task
Author

Tejas Pratap Singh
Computer Science & Engineering
SRMCEM, Lucknow

