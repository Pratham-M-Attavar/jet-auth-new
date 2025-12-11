# Jet Auth

This project implements **JWT-based authentication** using Node.js and Express.

It allows users to:

1. **Register** with an email and password.
   - Passwords are hashed using bcrypt for security.
2. **Login** to receive a JWT token.
   - Tokens expire after 10 minutes.
3. **Invoke a protected function** using the JWT token.
   - Only users with a valid token can access this route.

This demonstrates secure handling of authentication and authorization using JWT.
