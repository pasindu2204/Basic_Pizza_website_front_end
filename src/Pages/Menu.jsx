import React from 'react'
import { MenuList } from '../Helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../Pages/Menu.css';

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menu-title'>Our Menu</h1>
      <div className='menu-list'> {
        MenuList.map((item, key) => (
          <MenuItem
            key={key}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu
