import { useState, useEffect } from 'react'
import './App.css'
import ArtistCard from './assets/ArtistCard'

function App() {
  // const [showArtists, setShowArtists] = useState(true)
  const [artistArray, setArtistArray] = useState([])
  const [songArray, setSongArray] = useState([])
  // const [spotifyInfo, setSpotifyInfo] = useState([])
 

  const fetchArtists = async () => {
    const response = await fetch(`${import.meta.env.VITE_API}/artists`)
    const data = await response.json()
    setArtistArray(data)
  }
  const fetchSongs = async () => {
    const response = await fetch(`${import.meta.env.VITE_API}/songs`)
    const data = await response.json()
    setSongArray(data)
  }
  // const fetchSpotify = async () => {
  //   const response = await fetch(`https://api.spotify.com/v1/artists/${import.meta.env.VITE_SPOTIFY_ID}`)
  //   const data = await response.json()
  //   setSpotifyInfo(data)
  // }

  useEffect(() => {
    fetchArtists()
    fetchSongs()
    // fetchSpotify()
  }, [])

  return (
    <div className="App">
      {artistArray.map(artist => <ArtistCard artist={artist}/>)}
      {/* {songArray.map(song => <div className='song-card'>
       <p>Song:{song.name}</p>
      </div>)} */}
      {/* {spotifyInfo.map(spotify => <div className='spotify-card'>
       <p><img src ={spotify.images[0]}></img> </p>
      </div>)} */}
    </div>
  )
}

export default App
