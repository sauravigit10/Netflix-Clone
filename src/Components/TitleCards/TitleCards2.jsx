import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data2 from '../../assets/Cards/Cards_data2'


const TitleCards2 = () => {
 const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWJhOTgzOWJmN2UyZDA0YzQzOGIzMGEzOWM0ZTNlZiIsIm5iZiI6MTc1ODk0MjgzMS4xODMsInN1YiI6IjY4ZDc1NjZmYzdiNDNjNjAwZGI0MGE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7zFn5vxfst4Oia89xyqPGs8FljRuQCbLZL1j9PqkvM'
  }
};

const handleWheel =(event)=>
{
  event.preventDefault();
  cardsRef.current.scrollLeft+= event.deltaX;
}
useEffect(()=>
{
  
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel);
},[]);


  return (
    <>
     <div className="title-cards">
      <h2>Popular on Netflix</h2>

     <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (

          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <div className="card-info">
              <p className="card-title">{card.title}</p>
              <div className="card-description">
               <div className="include">
                  <div style={{border:"1px solid white",borderRadius:"3px",height:"17px",maxWidth:"fitcontent",textAlign:"center",alignItems:"center"}}>{card.vote_average}</div>
                  <div>{card.duration}</div>
                  <div style={{border:"1px solid white",borderRadius:"3px",height:"17px",width:"22px",textAlign:"center",alignItems:"center"}}>HD</div>
               </div >
               <div style={{display:"flex", flexDirection:"row",gap:"5px"}}>
                <li className="genre">{card.release_date}</li> <br />
                <li className="genre">{card.adult}</li>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default TitleCards2