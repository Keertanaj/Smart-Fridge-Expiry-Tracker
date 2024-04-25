import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import VideoSection from '../VideoSection';
import FoodWrapper from '../FoodWrapper';
import Other from '../Other';
function Home() {
  return (
    <>
      <VideoSection/>
      <Cards/>
      <FoodWrapper/>
      <Other/>
    </>
  );
}

export default Home;