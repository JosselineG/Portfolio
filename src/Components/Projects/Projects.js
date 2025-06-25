import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'


function Projects() {

  return (
    <div id="Projects" className='projectSection'>
      <div className='prjContainer'>  
        
      <div className='ct1Heading'> <h1>Recent Work</h1></div>
        
        <div className='container1'>  
          
          <Link className='prjs' id='work1' to='ArtistPortfolio'><h1> Artist Portfolio </h1></Link>
          
          <Link className='prjs' id='work2' to='WeldingWebsite'> <h1> R.P. Welding Solutions </h1></Link>

        </div> 
      
        <div className='ct1Heading'> <h1>Personal Projects</h1></div>
       
        <div className='container2'>  

          <Link className='prjs' id='prj5' to='Project5'> <h1> Wordle Clone SPA </h1></Link>

          <Link className='prjs' id='prj4' to='Project4'><h1>  Portfolio</h1> </Link>

          <Link className='prjs' id='prj2' to='Project2'> <h1> Weather App</h1> </Link>

          <Link className='prjs' id='prj1' to='Project1'><h1> Design Pad </h1></Link>

          

          <Link className='prjs' id='prj6' to='Project6'><h1>  Ecommerce Store Template </h1></Link>

          <Link className='prjs' id='prj7' to='Project7'> <h1> Registration Form </h1></Link>

        </div> 

      </div> 
    </div>  
  );

}

export default Projects;
