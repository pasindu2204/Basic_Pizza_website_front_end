import React from 'react'
import dp from '../assents/7.jpg';
import '../Styles/About.css';

const About = () => {
  return (
    <div className='about'>
        <div className='about-up' style={{ backgroundImage: `url(${dp})` }}></div>
        <div className='about-down'>
            <h1>ABOUT US</h1>
            <h3>Welcome to Pizza Inc.!</h3>
            <p>

At Pizza Inc., we believe that great pizza brings people together. Since our founding in 2020, 
we’ve been dedicated to serving fresh, delicious, and handcrafted pizzas made with only the finest ingredients. 
Every pizza is prepared with love, from the perfect dough to our signature sauces and fresh toppings.
Our mission is simple: to make every bite unforgettable. Whether you’re grabbing a quick lunch, sharing a family dinner, 
or celebrating a special occasion, Pizza Inc. is here to make your moments tastier.
We also care about our community and the environment — sourcing local ingredients whenever possible 
and reducing waste wherever we can.
Join us and experience the perfect combination of flavor, freshness, and fun. Because at Pizza Inc., 
pizza isn’t just food — it’s an experience.</p>
        </div>
      
    </div>
  )
}

export default About
