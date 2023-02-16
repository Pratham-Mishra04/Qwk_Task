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
   <div className='bg-[#F5F5F5] bg'>
   <Navbar/>
    <Landing/>
    <OneApp/>
    <AllEssentials/>
    <HappyUser/>
    <Footer/>
   </div>
  </>
  );
}

export default App;
