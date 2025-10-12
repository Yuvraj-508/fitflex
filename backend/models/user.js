const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/fitnix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

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
module.exports = User;