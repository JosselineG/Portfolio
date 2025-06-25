import './SinglePageApp.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';


function SinglePageApp() {
  return (
    <div className="SinglePageApp">
      <div className='Main'>

        <NavBar />
        <Home />
        <AboutMe />
        <Projects  />
        <ContactMe />
        <Footer />
        </div>
       
    </div>

  );
}

export default SinglePageApp;
