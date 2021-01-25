import express from 'express';
import models from './models/index.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const log = (msg) => console.log(msg);
app.get('/' , (req,res)=>{
    res.send('parcel tracking api')
})

app.post('/' , (req,res)=>{
    const body = req.body;
    res.send('hello viewers this is post' + body.message);
})

app.listen(port, ()=>{
    console.log("Listening to port" + port);
});

log(models);