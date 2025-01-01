const express=require('express');
const {handleurl}=require('../controller/handleurl')
const router=express.Router();
router.post('/',handleurl);
module.exports=router;