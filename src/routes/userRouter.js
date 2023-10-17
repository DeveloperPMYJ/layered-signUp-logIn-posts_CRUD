// userController를 부른다. 
const express = require('express');
const { userController } = require('../controllers');
//const userController = require('../controllers)

const userRouter = express.Router();

userRouter.get("/getusers", userController.getUsers);
userRouter.post('/signup', userController.signUp);
// router.post('/signup', () => {console.log("Router Connected")}
userRouter.post('/login', userController.logIn);

module.exports = { userRouter }
//함수명 내보내주기 , 객체로 내보냈기에, require 받을 때도 객체로 받아야

//index 에서 user 로 들어오는 거를 userRouter로 보내주고, userRouter에서 signup으로 보내고