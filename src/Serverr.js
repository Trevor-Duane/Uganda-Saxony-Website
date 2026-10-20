const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Set up the transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Route to send email
app.post("/send-email", (req, res) => {
    const { from_name, from_email, from_mobile, from_address, from_organisation, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER2,
        subject: `New message from ${from_name}`,
        html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; max-width: 600px; margin: 0 auto;">
            <!-- Header with logo and background -->
            <div style="background-color: #28a745; padding: 10px; text-align: center;">
                <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/Group-50-1.png" alt="Logo" style="max-width: 150px; height: auto;">
            </div>

            <!-- Content -->
            <div style="padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333;">New message from ${from_name} - ${from_organisation}</h2>
                <hr></hr>
                <p><strong>Name:</strong> ${from_name}</p>
                <p><strong>Email:</strong> ${from_email}</p>
                <p><strong>Phone:</strong> ${from_mobile}</p>
                <p><strong>Address:</strong> ${from_address}</p>
                <p><strong>Organisation:</strong> ${from_organisation}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 10px; background-color: #f1f1f1; color: #777;">
                <p>&copy; ${new Date().getFullYear()} Your Company Name</p>
            </div>
        </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: "Error sending email", error });
        }
        res.status(200).send({ message: "Email sent successfully", info });
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
