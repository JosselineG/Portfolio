import { color } from '@mui/system';
import React from 'react';
import './Projects.css'


function Projects() {



  return (
    <div className='prj' id='Projects'>
      <h1>Projects</h1>

      <div className='prjContainer'>

             
        <a className='prj1' href='https://github.com/JosselineG/design-pad'>
         
          Design Pad
          {/* <p>This is a group project</p> */}
          
        </a>
       
       
     
          {/*  <p> Weather app using openweathermap API</p> */}
          <a className='prj2' href='https://github.com/JosselineG/My2Project'>
          Weather App
           </a>
           
       
              {/*  <p> This is my first portfolio</p> */}
          <a className='prj3' href='https://github.com/JosselineG/josselineg.github.io'>
          First Portfolio</a>
         
         
        <a className='prj4'>
          Mechanic Website
          {/*  <p> This is a website I created for a small business</p> */}
        </a>
          
       
      </div>



    </div>
  );
}

export default Projects;
