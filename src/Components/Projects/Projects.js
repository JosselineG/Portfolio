import { color } from '@mui/system';
import React from 'react';
import './Projects.css'


function Projects() {



  return (
    <div className='prj' id='Projects'>
      <h1>Projects</h1>

      <div className='prjContainer'>

      
        <div className='prj1'>
          <a href='https://github.com/JosselineG/design-pad'>
          <h1>Design Pad</h1>
          {/* <p>This is a group project</p> */}
          </a>
        </div>
   
        <div className='prj2'>
         
          {/*  <p> Weather app using openweathermap API</p> */}
          <a href='https://github.com/JosselineG/My2Project'>
          <h1>Weather App</h1>
           </a>
        </div>

        <div className='prj3'>
  
          {/*  <p> This is my first portfolio</p> */}
          <a href='https://github.com/JosselineG/josselineg.github.io'>
          <h1>First Portfolio</h1></a>
        </div>

        <div className='prj4'>
          <h1>Mechanic Website</h1>
          {/*  <p> This is a website I created for a small business</p> */}
        </div>

      </div>



    </div>
  );
}

export default Projects;
