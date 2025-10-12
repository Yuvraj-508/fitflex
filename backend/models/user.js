import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
email: { type: String, unique: true, sparse: true },
    phone: { type: Number, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, default: 'Not Provided' },
    joinDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Paused','Expired'], default: 'Active' },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default  User;