const express = require ('express');
const cors = require ('cors')
const mongoose = require('mongoose');
const Userlist = require ('./models/userSchema')
const bcrypt = require('bcrypt');
const emailVerification = require('./helpers/emailverification');
const app =express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Sakib:sakib161804@sakib.668hnic.mongodb.net/test?retryWrites=true&w=majority&appName=Sakib')
  .then(() => console.log('Connected!'));

app.get('/', (req,res)=>{ res.send("Hello Bangladesh")})

const user =[{ name: "Sakib", eamil:"sakib@gmail.com", password: "12345"},]



app.get('/users',async (req,res)=>{
    const user = await Userlist.find({})
    res.json(user)
    // res.send(user)
})



///////////////////// Post Method ////////////////////


app.post('/users', (req,res)=>{
    console.log(req.body);  
    const newUser =req.body;
    user.push(newUser)
    res.send(req.body)
    const {fname, email, password} = req.body;

    
    bcrypt.hash(password, 10, function(err, hash) {
     console.log(hash, "hash")  
    let users = new Userlist({
        name : fname,
        email: email,
        password: password
     })
     users.save()
     emailVerification(email)
    });
})


///////////////////////////post Method End ////////////////////

app.listen(4000, ()=>{
    console.log("App listing on port 4000")
})