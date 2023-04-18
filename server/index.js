// const express = require('express');
import express from 'express'
// import dotenv from 'dotenv'
import cors from 'cors'
import read from './queries/read.js'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use(cors({
  origin: '*'
}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.get('/artists', read.artists)
app.get('/songs', read.songs)

//Serve any file in the build folder
const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, '..', 'client', 'dist')));

app.listen(port,() => {
  console.log(`Server Listening at http://localhost:${port}`);
}) 
