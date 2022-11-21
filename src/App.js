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

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <Home /> */}
      <Cards />
       <BioGraphy />
      <Services />
     {/* <Gallery /> */}
        <Review />
      <Contact />
      <Footer />


    </>
  );
}

export default App;
