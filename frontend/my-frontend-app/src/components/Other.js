
import React from 'react';
import './Other.css';
import OtherItem from './OtherItem';

function Other() {
  return (
    <div className='other'>
      <h1>Recipes</h1>
      <div className='other__container'>
        <div className='other__wrapper'>
          <ul className='other__items'>
            <OtherItem
              src='images/img-6.jpg'
              text='Banana Milkshake'
            />
            <OtherItem
              src='images/img-7.jpg'
              text='Grilled Cheese Sandwich'
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}




export default Other;

