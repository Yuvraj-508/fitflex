const User = require('../models/User.js');
// const fs = require('fs');
// const path = require('path');
// const PDFDocument = require('pdfkit');

// async function generateInvoice(user) {
//   return new Promise((resolve, reject) => {
//     try {
//       const invoicesDir = path.join(__dirname, '../invoices');

//       // Create invoices folder if it doesn't exist
//       if (!fs.existsSync(invoicesDir)) {
//         fs.mkdirSync(invoicesDir, { recursive: true });
//       }

//       const invoicePath = path.join(invoicesDir, `${user.name}_${Date.now()}.pdf`);

//       const doc = new PDFDocument({ size: "A4", margin: 50 });
//       doc.pipe(fs.createWriteStream(invoicePath));

//       // Header
//       doc.fillColor("#444444").fontSize(20).text("FITNIX GYM", { align: "center" }).moveDown();

//       doc.fontSize(16).fillColor("#000")
//         .text(`Invoice for: ${user.name}`)
//         .text(`Email: ${user.email || "N/A"}`)
//         .text(`Phone: ${user.phone}`)
//         .moveDown();

//       // Membership Info
//       doc.fontSize(14).fillColor("#444").text("Membership Details:", { underline: true }).moveDown(0.5);

//       const membershipDetails = [
//         { label: "Duration", value: user.duration },
//         { label: "Join Date", value: new Date(user.joinDate).toDateString() },
//         { label: "Expiry Date", value: new Date(user.expiryDate).toDateString() },
//         { label: "Price (₹)", value: user.price },
//         { label: "Status", value: user.status },
//       ];

//       membershipDetails.forEach((item) => {
//         doc.text(`${item.label}: ${item.value}`);
//       });

//       doc.moveDown(2)
//         .fillColor("#000")
//         .fontSize(12)
//         .text("Thank you for joining FITNIX Gym!", { align: "center" });

//       doc.end();

//       resolve(invoicePath);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }



 async function addUser(req, res) {
    try {
         const { name,email,phone,gender,age,address,joinDate,expiryDate,duration,price,status } = req.body;
       if(!name || !phone || !gender || !age || !joinDate || !expiryDate || !duration || !price){
        return res.status(400).json({ error: 'Please fill all required fields' });
       }
       console.log(req.body);
   
    const newUser = await User.create({
        name,
    email: email ? email : undefined,
        phone,
        gender,
        age,
        address,
        joinDate,
        expiryDate,
        duration,
        price,
        status
    });

//  const invoicePath = await generateInvoice(newUser);

    res.status(201).json({
      success: true,
      message: "User added successfully",
      user: newUser,
      // invoicePath, // send path or URL to frontend
    });
      }
     catch (error) {
        console.error('Error adding user:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
    }
}
async function getUserList(req, res) {
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


async function getUserById(req,res) {
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


module.exports = { addUser,getUserList ,getUserById};