const express=require('express');
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
require('dotenv/config')


//middleware: fucntion that execs when a routes are being hit. when a paticular route is being hit.


//connect to database
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{console.log(`Connected to the database now.`)})


//import ROUTES
const postsRoute=require('./routes/posts')
app.use('/posts',postsRoute)
// app.use('/users',usersRoute) : other routes.


//ROUTES
app.get('/',(req,res)=>{     //patch for updating,get for getting, post for give the info,delete to delete the info.
    res.send('we are homes')
})

app.get('/posts',(req,res)=>{     
    res.send('we are posts')
})






app.listen(3000);