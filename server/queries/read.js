import pool from '../pool.js';


// Get all artists
const artists = (req, res) => {
  pool.query('SELECT * FROM artists', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}
const songs = (req, res) => {
  pool.query('SELECT * FROM songs', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

export default {
  artists, songs
}