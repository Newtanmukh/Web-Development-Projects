const express=require('express')
const router=express.Router()
const Post=require('../models/Post')


//GET ALL DATA
router.get('/',async(req,res)=>{     //patch for updating,get for getting, post for give the info,delete to delete the info.
    try{
        const posts=await Post.find(); //.limit(5)-send 5 post etc.
        res.json(posts);

    }catch(err){
        res.json({message:err});

    }
})

//GET SPECIFIC POST
router.get('/:postId',async(req,res)=>{
   //console.log(req.params.postId);
   try{
  const post=await Post.findById(req.params.postId);
  res.json(post);
   }catch(err){
       res.json({message:err})
   }
})



//DELETE POST
router.delete(':/postId',async(req,res)=>{
try{
  const removedpost=  Post.remove({_id:req.params.postId})
  res.json(removedpost)
}
catch(err){
    res.json({message:err})
}

})




//UPDATE POST
router.patch('/:postId',async(req,res)=>{

try{
const updatedpost = await Post.updateOne({_id:req.params.postId},
    {$set:{title:req.body.title}})//second paramater is which stuff to update

    res.json(updatedpost);
}catch(err){
    res.json({message:err})
}

})





//SUBMIT A POST.
router.post('/',async(req,res)=>{
   const post=new Post({
        title:req.body.title,
        description:req.body.description
   });
   try
   {
   const savedPost=await post.save();
   res.json(savedPost);
   }
   catch(err)
   {
       res.json({message:err})
   }
})






module.exports=router;