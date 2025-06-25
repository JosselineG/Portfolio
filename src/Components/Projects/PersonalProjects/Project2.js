import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import img2 from '../../Assets/HomeProj2.PNG'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';

const Project2 = () => {

  return (
    <div className='Project'>
      <div className='Pbox'>
        <div className='Pnav' >
          <div className='tabs'>
            <div className='tab1'>

              <h4>
                Weather App
              </h4>

            </div>
          </div>


          <div className='closeX'>

            <Link to="/" >
              <CloseOutlinedIcon sx={{ color: 'white' }} />
            </Link>
          </div>
        </div>


        <div className='Sbox'>
          <div className='ImgCode'>


            <img src={img2} alt='img2' />

            <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href='https://github.com/JosselineG/My2Project' >

              <h3>Code</h3>

            </Button>

          </div>


          <div className='descriptionBox'>

            <h1>Aim:</h1>

            Project: Create a web app using an API.

            <h1>Overview:</h1>

            Using OpenWeatherMap API, I built a weather app that displays the temperature, description and wind speed
            for the current moment in time. Users can search for the weather in any city in the United States.
            Users can also navigate to the Favorites page, where they can save the weather for their favorite cities in a table.

            <h1>Development Tools:</h1>

            <li>
              Front-End: React.js, CSS, Javascript, HTML
            </li>

            <li>
              Back-End: Express, Node.js
            </li>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2