exports.saveUserData = async (req, res) => {
    try {
        console.log("Received Data:", req.body); // Debugging log

        const { name, mobile, consumerNumber, uniqueid } = req.body;

        // Check if uniqueid is missing
        if (!uniqueid) {
            return res.status(400).json({
                success: false,
                message: "Error: uniqueid is required"
            });
        }

        const newUser = new User({
            name,
            mobile,
            consumerNumber,
            uniqueid
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User Data Submitted Successfully!",
        });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting user data"
        });
    }
};
