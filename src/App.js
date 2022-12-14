import React, { useEffect, useState } from 'react';
import './App.scss';
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

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "https://firmtechservices.com/api/177-24-Hour-Towing-Service-Tulsa-OK"

    const fetchDate = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json)
      }
      catch (error) {
        console.log("Error", error)
      }
    }
    fetchDate();
  }, [])

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
