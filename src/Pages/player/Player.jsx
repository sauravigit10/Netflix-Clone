import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from'../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom'

const Player = () => {
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

});
  const navigate=useNavigate();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWJhOTgzOWJmN2UyZDA0YzQzOGIzMGEzOWM0ZTNlZiIsIm5iZiI6MTc1ODk0MjgzMS4xODMsInN1YiI6IjY4ZDc1NjZmYzdiNDNjNjAwZGI0MGE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7zFn5vxfst4Oia89xyqPGs8FljRuQCbLZL1j9PqkvM'
  }
};
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/1311031/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" title="trailer" allowFullScreen></iframe>
      <div className='player-info'>
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>
      </div>
    </div>
  )
}

export default Player