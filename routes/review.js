const express=require('express');
const router=express.Router();
const reviewController=require('../controllers/review_controller.js');

router.post('/create',reviewController.create);

module.exports=router;