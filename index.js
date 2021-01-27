
import express from 'express';
import models from './models/index.js';
import mongoose from 'mongoose';
import connectWithDb from './mongo';



const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
const log = (msg) => console.log(msg);
connectWithDb();


app.get('/' , (req,res)=>{
    res.send('parcel tracking api')
})

app.post('/' , (req,res)=>{
    const body = req.body;
    const user = new models.User({username: body.username , createdAt: new Date()});
    user.save().then((savedUser)=>{
        res.status(201).send('User saved Id' + savedUser._id);
    }).catch((error)=>{
        res.status(500).send(error);
    });
    
})

app.listen(port, ()=>{
    console.log("Listening to port" + port);
});

log(models);