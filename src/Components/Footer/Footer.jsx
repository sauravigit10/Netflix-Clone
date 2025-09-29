import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import Instagram_icon from '../../assets/Instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={Instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li> Gift Cards</li>
        <li>Media Centre </li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li> Terms of Use</li>
        <li>Privacy</li>
        <li> Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text'>@ 1998-2024 Netflic=x,Inc.</p>
    </div>
  )
}

export default Footer