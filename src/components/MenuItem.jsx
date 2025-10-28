import React from 'react';
import '../Styles/MenuItem.css';

const MenuItem = ({image, name, price}) => {
  return (
    <div className='item'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
    <h3>{name}</h3>
    <p>${price}</p>
    </div>
);
}

export default MenuItem
