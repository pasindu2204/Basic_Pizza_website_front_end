import React, {useState} from 'react';
import logo from '../assents/images.png';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Navbar = () => {

  const [openLinks, setOpenLinks] = useState(false);

  const Reorder =() => {
setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      
      <div className='left-side' id = {openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className='hiddenLinks'>
          <Link to="/" >Home </Link>
        <Link to="/service">Service</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        </div>
      </div>
      <div className='right-side'>
        <Link to="/" >Home </Link>
        <Link to="/service">Service</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <button onClick={Reorder} >
          <ListAltIcon />
        </button>
      </div>
      
    </div>
  ) 
}

export default Navbar
 

