
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Category</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpeg'
              text='Fruits and Veggies'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Breads & Sweets'
              label='Luxury'
            />
            <CardItem
              src='images/img-3.jpeg'
              text='Milk & Milk Products'
              label='Mystery'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Raw Meat'
              label='Adventure'
            />
            <CardItem
              src='images/img-5.jpeg'
              text='Natural Herbs'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
