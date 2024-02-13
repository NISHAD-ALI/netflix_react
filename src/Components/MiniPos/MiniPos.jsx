import React, { useEffect, useState } from 'react';
import './miniPos.css';
import axios from '../axios';
import { API_KEY, imageUrl } from '../../Components/Constants/Constants';
import YouTube from 'react-youtube';

const MiniPos = (props) => {
  const [movies,setMovies] = useState([])
  const [url,setUrl] = useState()
  useEffect(() => {
    axios.get(props.url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
    const trailers = (id) =>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
        if(res.data.results){
          setUrl(res.data.results[0])
          console.log(res.data.results)
        }
      
    })
  }
  const opts = {
    height: '500px%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='down'>
      <div className='row'>
        <h1 className='head'>{props.title}</h1>
        <div className='card'>
         {movies.map((obj,index)=>
          <img key = {index} src={`${imageUrl+obj.poster_path}`} onClick = {trailers(obj.id)}alt="small_poster" className='poster'/>
         )}
        </div>
      </div>
      { url && <YouTube videoId={url.key}  opts={opts} /> }
    </div>
  );
};

export default MiniPos;
