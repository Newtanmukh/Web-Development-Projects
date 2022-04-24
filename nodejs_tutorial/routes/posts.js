const express=require('express')
const router=express.Router()
const Post=require('../models/Post')

router.get('/',(req,res)=>{     //patch for updating,get for getting, post for give the info,delete to delete the info.
    res.send('we are posts')
})


router.post('/',(req,res)=>{
    console.log(req.body)
})






module.exports=router;