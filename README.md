# Jwt Auth

This project implements JWT-based authentication** using Node.js and Express.

It allows users to:

1. **Register** with an email and password.
   - Passwords are hashed using bcrypt for security.
2. **Login** to receive a JWT token.
   - Tokens expire after 10 minutes.
3. **Invoke a protected function** using the JWT token.
   - Only users with a valid token can access this route.

This demonstrates secure handling of authentication and authorization using JWT.

## Setup Instructions

1. Install dependencies
npm install express bcrypt jsonwebtoken dotenv

2. Create .env file in the project root:
JWT_SECRET=your_secret_key
PORT=3000

How to Run the Project
Start the server: node server.js

How to Test the Project
1. Register a user
GET http://localhost:3000/register?email=example@example.com&password=1234
2. Login
GET http://localhost:3000/login?email=example@example.com&password=1234
3. Invoke protected function
GET http://localhost:3000/invoke?token=<paste_your_jwt_token_here>



