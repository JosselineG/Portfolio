import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';


function App() {
  return (
<div className="App" >



 <NavBar />
 <Home />
 <AboutMe />
 <Projects/>
<ContactMe />
<Footer />
    </div>
   
  );
}

export default App;
