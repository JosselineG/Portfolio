import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'


function Projects() {



  return (
    <div id="Projects" className='prj'>
      <div className='prjContainer'>  
 

          
            <Link className='prjs' id='prj1' to='Project1'><h1> Design Pad </h1></Link>

            <Link className='prjs' id='prj2' to='Project2'> <h1> Weather App</h1> </Link>

            <Link className='prjs' id='prj3' to='Project3'> <h1> Older Portfolio </h1></Link>

            <Link className='prjs' id='prj4' to='Project4'><h1>  Portfolio</h1> </Link>

            <Link className='prjs' id='prj5' to='Project5'> <h1> Wordle Clone ESP </h1></Link>

            <Link className='prjs' id='prj6' to='Project6'><h1>  Ecommerce Store </h1></Link>

            <Link className='prjs' id='prj7' to='Project7'> <h1> Registration Form </h1></Link>

     
  

       </div> 

    </div>  
  );
}

export default Projects;
