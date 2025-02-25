// controllers/userController.js
const User = require('../models/User');

// Save user data to the database
exports.saveUserData = async (req, res) => {
    try {
        const { name, mobile, consumerNumber, uniqueid } = req.body;

        const newUser = new User({
            name,
            mobile,
            consumerNumber,
            uniqueid
        });

        await newUser.save();

        // Send success response with userId
        res.status(200).json({
            success: true,
            message: "User Data Submitted Successfully!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting user data"
        });
    }
};
