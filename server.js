require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const app = express();
const users = [];

//REGISTER
app.get("/register", async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    if (!email || !password) {
        return res.send("Email and password required");
    }
    const exists = users.find(u => u.email === email);
    if (exists) {
        return res.send("Email already registered");
    }


    const hashedPw = await bcrypt.hash(password, 10);

    users.push({ email, password: hashedPw });

    res.send("User registered successfully");
});

// LOGIN
app.get("/login", async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    if (!email || !password) {
        return res.send("Email and password required");
    }

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.send("Invalid email or password");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.send("Invalid email or password");
    }


    const token = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "10m" }
    );

    res.send(token);
});

//INVOKE
app.get("/invoke", (req, res) => {
    const token = req.query.token;

    if (!token) return res.send("Access denied");

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.send("Access denied");

        return res.send("Function invoked successfully");
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
