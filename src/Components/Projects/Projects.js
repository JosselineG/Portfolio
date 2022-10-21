import React from 'react';
import './Projects.css'


function Projects() {



  return (
    <div className='prj' id='Projects'>
      <h1>Projects</h1>

      <div className='prjContainer'>


        <a className='prj1' href='https://github.com/JosselineG/design-pad'>

          Design Pad
        </a>



        {/*  <p> Weather app using openweathermap API</p> */}
        <a className='prj2' href='https://github.com/JosselineG/My2Project'>

          Weather App
        </a>


        {/*  <p> This is my first portfolio</p> */}
        <a className='prj3' href='https://github.com/JosselineG/josselineg.github.io'>
          Portfolio

        </a>


        <a className='prj4' href="https://github.com/JosselineG/Small-Business-Website">
          Small Business Website


        </a>


      </div>



    </div>
  );
}

export default Projects;
