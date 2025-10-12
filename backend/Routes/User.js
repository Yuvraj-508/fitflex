const express = require('express');
const userRouter = express.Router();
const  {addUser, getUserList, getUserById } = require('../controllers/user.js');


userRouter.post('/add-user',addUser);
userRouter.get('/user-list',getUserList);
userRouter.get('/profile/:id',getUserById);


module.exports = userRouter;