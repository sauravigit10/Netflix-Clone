import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/Cards/Cards_data";

const TitleCards = () => {
  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  };
  useEffect(() => {
  const ref = cardsRef.current;
  ref.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    ref.removeEventListener("wheel", handleWheel);
  };
}, []);


  return (
    <>
 <div className="title-cards">
      <h2>Your next watch</h2>

      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
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
               <div>
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
  );
};

export default TitleCards;
