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

app.get('/api/artists', read.artists)
app.get('/api/songs', read.songs)

//Serve any file in the build folder
const directory = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory, '..', 'client', 'dist')));

//Grab any request that's not for API and route it to index for react-router-dom
app.get(x => !x.startsWith('/api'), function (req, res) {
  res.sendFile(path.join(directory, '..', 'client', 'dist', 'index.html'));
});

app.listen(port,() => {
  console.log(`Server Listening at http://localhost:${port}`);
}) 
