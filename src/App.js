import React, { useEffect, useState } from 'react';

import BioGraphy from './Components/BioGraphy/BioGraphy';
import Cards from './Components/Cards/Cards';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import Services from './Components/Services/Services';

import axios from 'axios';

import './App.scss';





function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get('https://firmtechservices.com/api/177-24-Hour-Towing-Service-Tulsa-OK')
      .then(res => setData(res.data));


  }, [])

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--bg-image');
    console.log(color)
    document.documentElement.style.setProperty('--primary-color', data?.landPage?.client?.theme_color);
    document.documentElement.style.setProperty('--bg-image', `url ( "${data?.landPage?.client?.theme_color}" )`);
    document.documentElement.style.setProperty('--bg-mobile', `url ( "${data?.landPage?.client?.theme_color}" )`);
  })

  return (
    <>
      <Header page={data} />
      <Navbar page={data} />
      <Home page={data} />
      <Cards page={data} />
      <BioGraphy page={data} />
      <Services page={data} />
      <Gallery page={data} />
      <Review page={data} />
      <Contact page={data} />
      <Footer page={data} />
    </>
  );
}

export default App;
