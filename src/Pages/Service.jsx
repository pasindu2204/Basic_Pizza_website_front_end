import React from 'react';
import '../assents/8.jpg';
import bgimage from '../assents/8.jpg';
import '../Styles/Service.css';

const Service = () => {
  return (
    <div className='service'>
        <div className='left' style={{ backgroundImage: `url(${bgimage})` }} ></div>
        <div className='right'>
            <h1 className='title'> 
            </h1>
            <p> 
                <form id='content' method='POST'>
                    <label htmlFor='fullname'>Full Name:</label>
                    <input type="name" placeholder="enter your full-name" />
                    <label htmlFor='fullname'>Full Address:</label>
                    <input type="address" placeholder="enter your address"/>
                    <label htmlFor='fullname'>Full Email:</label>
                    <input type="Email" placeholder="enter your email"/>
                    <label htmlFor='fullname'>Message :</label>
                    <textarea row= '6' placeholder='enter idea' required></textarea>
                    <button type='submit'>Submit</button>
             
                </form>
            </p>
        </div>
      
    </div>
  )
}

export default Service
