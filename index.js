
import express from 'express';

import mongoose from 'mongoose';
import connectWithDb from './mongo';


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
const log = (msg) => console.log(msg);

connectWithDb();

app.listen(port, ()=>{
    console.log("Listening to port" + port);
});
