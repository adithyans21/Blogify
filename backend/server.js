import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';   

const app = express();
let PORT = 3000;


mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true,
});

app.post('/signup',(req,res) => {
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });