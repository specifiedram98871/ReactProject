import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
// const express = require('express');  //common js format to import anything from node_modules


const localhost = 'localhost';
const app = express();

// middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// appport
const port = process.env.PORT || 8080;
//routes
app.use('/api', router); //api
app.get('/', (req, res) => {
    try {
        res.json('Get Req');
    } catch (error) {
        res.json(error);
    }
})

//start server only we have valid connection

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Your server is connected to http://${localhost}:${port}`)
        })
        
    } catch (error) {
        console.log("Invalid server connection");
    }
}).catch((error) => {
    console.log("Invalid database connection")
})

