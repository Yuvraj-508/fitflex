const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');
const  {addUser, getUserList, getUserById } = require('../Controllers/User');


userRouter.post('/add-user',addUser);
userRouter.get('/user-list',getUserList);
userRouter.get('/profile/:id',getUserById);


module.exports = userRouter;