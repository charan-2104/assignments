const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.status(200).json({
        message: 'Admin created successfully'
    })
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
         title: req.body.title,
         description: req.body.description,
         price: req.body.price,
         imageLink: req.body.imageLink,
    })

    const courseid = Math.floor(Math.random()*1000000)

    res.status(200).json({
        message: 'Course created successfully',
        courseId: courseid
    })
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    
    res.json({
        
    })
});

module.exports = router;