import User from '../models/User.js'
import fs from "fs";
import path from "path";
// utils/generateInvoice.js
import puppeteer from "puppeteer-core";
export async function generateInvoice(user) {
  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .header { text-align: center; color: #4f46e5; }
          .logo { width: 80px; height: 80px; margin-bottom: 10px; }
          .details, .membership { margin-top: 20px; }
          .details div, .membership div { margin-bottom: 5px; }
          .membership { background: #f3f4f6; padding: 10px; border-radius: 8px; }
          .footer { text-align: center; margin-top: 30px; color: gray; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="https://yourgymlogo.com/logo.png" class="logo"/>
          <h1>Gym Membership Invoice</h1>
        </div>

        <div class="details">
          <div><strong>Name:</strong> ${user.name}</div>
          <div><strong>Phone:</strong> ${user.phone}</div>
          <div><strong>Email:</strong> ${user.email || "N/A"}</div>
          <div><strong>Status:</strong> ${user.status}</div>
        </div>

        <div class="membership">
          <div><strong>Membership Type:</strong> ${user.duration}</div>
          <div><strong>Join Date:</strong> ${new Date(user.joinDate).toLocaleDateString()}</div>
          <div><strong>Expiry Date:</strong> ${new Date(user.expiryDate).toLocaleDateString()}</div>
          <div><strong>Price:</strong> ₹${user.price}</div>
        </div>

        <div class="footer">
          Thank you for being part of our fitness family!
        </div>
      </body>
    </html>
  `;

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS path
  headless: true, // run in background
});

  const page = await browser.newPage();
  await page.setContent(html);
  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();

  return pdfBuffer;
}







export async function addUser(req, res) {
  try {
    const { name, email, phone, gender, age, joinDate, expiryDate, duration, price, status } = req.body;

    const newUser = await User.create({
      name, email, phone, gender, age, joinDate, expiryDate, duration, price, status
    });

    // Generate PDF (your existing function)
    const pdfBuffer = await generateInvoice(newUser);

    // Ensure invoices folder exists
    const invoicesDir = path.join(process.cwd(), "invoices");
    if (!fs.existsSync(invoicesDir)) {
      fs.mkdirSync(invoicesDir, { recursive: true });
    }

    // Save PDF
    const filePath = path.join(invoicesDir, `${newUser._id}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer);

    res.status(201).json({
      success: true,
      message: "User added successfully",
      user: newUser,
      invoicePath: `/invoices/${newUser._id}.pdf`
    });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}


export async function getUserList(req, res) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize time to avoid partial day issues

    // Update users whose expiryDate has passed and status is still Active
    await User.updateMany(
      { expiryDate: { $lt: today }, status: "Active" },
      { $set: { status: "Expired" } }
    );

    // Fetch all users sorted by latest created first
    const users = await User.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      userList: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}


export async function getUserById(req,res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// controllers/userController.js

// Update User
export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
};

