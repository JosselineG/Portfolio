import './App.css';
import { Routes, Route } from 'react-router-dom';
import Project1 from './Components/Projects/Project1';
import Project2 from './Components/Projects/Project2';
import Project3 from './Components/Projects/Project3';
import Project4 from './Components/Projects/Project4';
import Project5 from './Components/Projects/Project5';
import Project6 from './Components/Projects/Project6';
import Project7 from './Components/Projects/Project7';
import SinglePageApp from './Components/SinglePageApp/SinglePageApp';

function App() {
  return (
    <div className="App" >


      <Routes>

        <Route path="/" element={<SinglePageApp />} />
        <Route path="Project1" element={<Project1 />} />
        <Route path="Project2" element={<Project2 />} />
        <Route path="Project3" element={<Project3 />} />
        <Route path="Project4" element={<Project4 />} />
        <Route path="Project5" element={<Project5 />} />
        <Route path="Project6" element={<Project6 />} />
        <Route path="Project7" element={<Project7 />} />

      </Routes>

    </div>

  );
}

export default App;
