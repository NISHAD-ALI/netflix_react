import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios  from '../axios'
import  {API_KEY,imageUrl}  from '../../Components/Constants/Constants';

const Banner = () => {
  const [movie,setMovie] = useState()
     useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>
              setMovie(res.data.results[0]))
         
     }, [])
     
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ''})`}}>
      <div className='details'>
       <h1 className='title'>{movie ? movie.title:''}</h1>
       <p className='description'>{movie ? movie.overview:''}</p>
       <br/>
       <br/>
      <button className='button'>Play</button>
      <button className='button'>+ My List</button>
      </div>
      
    </div>
  )
}

export default Banner
