import React from 'react';
import logo from '../assents/images.png';
import {Link} from 'react-router-dom'; 
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} />
            <div className='hiddenlinks'>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
            </div>
        </div>
        <div className='rightside'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <button>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar
