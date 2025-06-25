import './App.css';
import { Routes, Route } from 'react-router-dom';
import Project1 from './Components/Projects/PersonalProjects/Project1';
import Project2 from './Components/Projects/PersonalProjects/Project2';
import Project4 from './Components/Projects/PersonalProjects/Project4';
import Project5 from './Components/Projects/PersonalProjects/Project5';
import Project6 from './Components/Projects/PersonalProjects/Project6';
import Project7 from './Components/Projects/PersonalProjects/Project7';
import SinglePageApp from './Components/SinglePageApp/SinglePageApp';
import ArtistPorfolio from './Components/Projects/Recent Work/ArtistPortfolio';
import WeldingWebsite from './Components/Projects/Recent Work/WeldingWebsite';
function App() {
  return (
    <div className="App" >


      <Routes>

        <Route path="/" element={<SinglePageApp />} />
        <Route path="Project1" element={<Project1 />} />
        <Route path="Project2" element={<Project2 />} />
        <Route path="Project4" element={<Project4 />} />
        <Route path="Project5" element={<Project5 />} />
        <Route path="Project6" element={<Project6 />} />
        <Route path="Project7" element={<Project7 />} />

        <Route path="ArtistPortfolio" element={<ArtistPorfolio />} />
        <Route path="WeldingWebsite" element={<WeldingWebsite />} />

      </Routes>

    </div>

  );
}

export default App;
