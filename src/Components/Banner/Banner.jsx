import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_KEY, imageUrl } from '../../Components/Constants/Constants';

const Banner = () => {
  const [movie, setMovie] = useState()
  const random = Math.floor(Math.random() * 20)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) =>
      setMovie(res.data.results[random]))

  }, [])

  return (
    <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
      <div className='details'>
        <div className='td'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <p className='description'>{movie ? movie.overview : ''}</p>
        </div>
        <div className='button1'>
          <button className='button'>Play</button>
          <button className='button'>+ My List</button>
        </div>
      </div>

    </div>
  )
}

export default Banner
