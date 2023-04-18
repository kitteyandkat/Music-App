import React from "react";


export default function ({artist}) {
  return <div className='artist-card'>
  <img className='artist-image' src={artist.img}></img> 
  <div className='image-overlay image-overlay--blur'>
   <p className='artist-name'> {artist.name}</p> 
   <p className='artist-age'>Age: {artist.age}</p>
   </div>
 </div>
}