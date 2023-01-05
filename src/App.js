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

import Modal from './Components/Home/HomeLoder/Modal';

import axios from 'axios';

import './App.scss';





function App() {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(true)


  useEffect(() => {

    axios.get('https://firmtechservices.com/api/177-24-Hour-Towing-Service-Tulsa-OK')
      .then(res => setData(res.data));

    setTimeout(() => {
      setLoader(false)
    }, 2000);

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
      {/* <Modal/> */}
       <Header page={data} loading={loader} />
      <Navbar page={data} />
      <Home page={data} loading={loader} />
    {/*  <Cards page={data} loading={loader} />
      <BioGraphy page={data} />
      <Services page={data} loading={loader} />
      <Gallery page={data} /> */}
      {/* <Review page={data} /> */}
      {/* <Contact page={data} />
      <Footer page={data} /> */}
    </>
  );
}

export default App;
