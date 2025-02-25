const Admin = require('../models/Admin');

exports.getAdminNumber = async (req, res) => {
    try {
        const admin = await Admin.findOne();
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        let phoneNumber = admin.phoneNumber;

        // Agar number already +91 se start nahi ho raha, toh +91 add kar do
        if (!phoneNumber.startsWith("+91")) {
            phoneNumber = "+91" + phoneNumber;
        }

        res.json({
            success: true,
            phoneNumber: phoneNumber
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error retrieving admin phone number",
            error: err.message
        });
    }
};
exports.updateAdminNumber = async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        // Validate the phone number format (supports 10-15 digits with optional '+' at the beginning)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number format"
            });
        }

        // Check if the admin exist
        let admin = await Admin.findOne();
        if (!admin) {
            admin = new Admin({ phoneNumber });
        } else {
            admin.phoneNumber = phoneNumber;
        }

        // Save or update the admin phone number
        await admin.save();

        res.render("settings", { 
            adminPhoneNumber: admin ? admin.phoneNumber : ''  // Phone number pass karo
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error updating admin phone number",
            error: err.message
        });
    }
};
