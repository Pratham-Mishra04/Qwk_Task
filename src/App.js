  import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import AllEssentials from './sections/AllEssentials';
import HappyUser from './sections/HappyUser';
import Landing from './sections/Landing';
import OneApp from './sections/OneApp';

function App() {
  return (
   <>
    <Navbar/>
    <Landing/>
    <OneApp/>
    <AllEssentials/>
    <HappyUser/>
    <Footer/>
  </>
  );
}

export default App;
