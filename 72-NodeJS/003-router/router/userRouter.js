/*
 * @Author: niumengfei
 * @Date: 2020-06-04 14:38:22
 * @LastEditors: niumengfei
 * @LastEditTime: 2020-06-05 11:18:56
 * @Description: file content
 * @FilePath: \MyTools\72-NodeJS\003-router\router\userRouter.js
 */ 
const express = require('express');
const Router = express.Router;

const router = Router();

router.get('/add',(req,res)=>{
    res.send('user-add')
})

router.get('/del',(req,res)=>{
    res.send('user-del')
})

module.exports = router;