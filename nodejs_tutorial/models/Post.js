const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
  title:{
         type:String,
          required:true
       },
  description:{
            type:String,
            
        },
        data:{
            type:Date,
            default:Date.now
        },

})


module.exports = mongoose.model('Posts',PostSchema)