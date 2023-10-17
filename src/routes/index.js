// 외부에서 들어노는 요청을 하위 폴더로 안내하는 길잡이 역할
const express = require("express");

const { userRouter } = require("./userRouter"); 
const { postRouter } = require("./postRouter");

const router = express.Router();

router.use ("/users", userRouter)
router.use ("/posts", postRouter)

module.exports = {router} ;
// 그 전 단에서 객체로 보냈기에 객체로 받아야 함 

//index 에서 user 로 들어오는 거를 userRouter로 보내주고, userRouter에서 signup으로 보내고