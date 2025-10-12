const express = require('express');
 const User = require('./Models/user');
const userRouter = require('./Routes/User');
const server= express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
};
server.use(cors(corsOptions));
server.use(express.json());


server.get('/', (req, res) => {
    res.send('Server is running');
});

server.use('/api',userRouter);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});