import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import MiniPos from './Components/MiniPos/MiniPos'
import axios from './Components/axios'
import {genreList,genreMovies} from './Components/Constants/Constants';
function App() {
  const [genres,setGenres] = useState([])
  useEffect(()=>{
    axios.get(genreList).then((res)=>setGenres(res.data.genres)).catch((err)=>console.log(err))
  })

  return (
    <>
      <Navbar />
      <Banner />
      {
      genres.map((obj,ind)=><MiniPos key={ind} title={obj.name} url={genreMovies+obj.id}/>)
    }
    </>
  )
}

export default App
