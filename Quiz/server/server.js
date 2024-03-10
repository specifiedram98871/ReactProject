import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
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

app.get('/', (req, res) => {
    try {
        res.Express('get Req')
    } catch (error) {
        res.json(error)
    }
})
app.listen(port, () => {
    console.log(`Your server is connected to http://${localhost}:${port}`)
})