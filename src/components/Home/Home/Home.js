import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import ClientReviews from '../ClientReviews/ClientReviews';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NewsLetter from '../NewsLetter/NewsLetter';
import Quote from '../Quote/Quote';
import Services from '../Services/Services';
import Technicians from '../Technicians/Technicians';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header id={'header'}></Header>
      <Features></Features>
      <About id={'about'}></About>
      <WhyUs></WhyUs>
      
      <Services id={'services'}></Services>
      <NewsLetter></NewsLetter>
      <ClientReviews></ClientReviews>
      <Quote id={'quote'}></Quote>
      <Technicians></Technicians>
      <Footer></Footer>
    </div>
  );
};

export default Home;