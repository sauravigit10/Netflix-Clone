import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data3 from '../../assets/Cards/Cards_data3';


const TitleCards3 = () => {
  const cardsRef=useRef();
const handleWheel =(event)=>
{
  event.preventDefault();
  cardsRef.current.scrollLeft+= event.deltaX;
}
useEffect(()=>
{
  cardsRef.current.addEventListener('wheel',handleWheel);
},[]);

  return (
    <>
     <div className="title-cards">
      <h2>Continue watching for Aastha</h2>

     <div className="card-list" ref={cardsRef}>
        {cards_data3.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <div className="card-info">
              <p className="card-title">{card.name}</p>
              <div className="card-description">
               <div className="include">
                  <div style={{border:"1px solid white",borderRadius:"3px",height:"17px",width:"22px",textAlign:"center",alignItems:"center"}}>{card.rate}</div>
                  <div>{card.duration}</div>
                  <div style={{border:"1px solid white",borderRadius:"3px",height:"17px",width:"22px",textAlign:"center",alignItems:"center"}}>HD</div>
               </div >
               <div style={{display:"flex", flexDirection:"row",gap:"5px"}}>
                <li className="genre">{card.genre}</li> <br />
                <li className="genre">{card.genre2}</li>
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

export default TitleCards3