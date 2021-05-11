import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Features></Features>
      <About></About>
      <WhyUs></WhyUs>
      <NewsLetter></NewsLetter>
      <Services></Services>
    </div>
  );
};

export default Home;