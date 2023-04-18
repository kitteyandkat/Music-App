// const express = require('express');
import express from 'express'
// import dotenv from 'dotenv'
import cors from 'cors'
import read from './queries/read.js'


const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/artists', read.artists)
app.get('/songs', read.songs)

app.listen(port,() => {
  console.log(`Server Listening at http://localhost:${port}`);
}) 