import React from 'react'
import '../Styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='socialmedia'>
          <FacebookIcon /> <InstagramIcon /> 
          <TwitterIcon /> <YouTubeIcon /> 
          </div>
          <p> &copy; 2025 Pizza Inc. All rights reserved.</p>
        
      </div>
    </div>
  )
}

export default Footer
