import './App.scss';
import BioGraphy from './Components/BioGraphy/BioGraphy';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Cards />
      <BioGraphy/>
      <Footer />

      
    </>
  );
}

export default App;
