import React from 'react'
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import bgimage from '../assents/peakpx_2.jpg'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bgimage})` }} >
      <div className='home-container'>
        <h1>Sweetar with Pizza</h1>
        <p>Fresh,Newly and Delicious Pizza</p>
        <Link to={'/menu'}>
        <button>Order Now</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
