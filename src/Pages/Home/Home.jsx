import React from 'react'
import './Home.css'
import Navbar from '../../Components/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import TitleCards2 from '../../Components/TitleCards/TitleCards2'
import TitleCards3 from '../../Components/TitleCards/TitleCards3'
import TitleCards4 from '../../Components/TitleCards/TitleCards4'
import TitleCards5 from '../../Components/TitleCards/TitleCards5'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
           <p>Discovering his ties to a secret ancient order,a
             young man living in modern istanbu embarks on a 
             quest to fin the city from an immortal enemy.</p>
             <div className="hero-btns">
              <button className='btn'>  <img src={play_icon} alt="" /> Play </button>
              <button className='btn dark-btn'>  <img src={info_icon} alt="" /> More Info </button>
             </div>
             <TitleCards2/>
        </div>
        
      </div>
        
      <div className="more-cards">
          
            <TitleCards5/>
      
        <TitleCards/>
          <TitleCards3/>    
         <TitleCards4/>
      </div>
      <Footer/>
      
    
    </div>
  )
}

export default Home