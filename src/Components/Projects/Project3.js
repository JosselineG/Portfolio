import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import img3 from '../Assets/imagePrj3.PNG'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';


const Project3 = () => {

  return (
    <div className='Project' >
      <div className='Pbox'>
        <div className='Pnav' >
          <div className='tabs'>
            <div className='tab1'>

              <h4>
                Older Portfolio
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


            <img src={img3} alt='img3' />

            <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href='https://github.com/JosselineG/josselineg.github.io' >

              <h3>Code</h3>

            </Button>


          </div>

          <div className='descriptionBox'>

            <h1>Aim:</h1>

            Project: Build a portfolio

            <h1>Overview:</h1>

            This was the first portfolio that I created during my final year in college as part of a
            web development course. I used React Routers to enable navigation between pages.

            <h1>Development Tools</h1>

            <li>
              Front-End: React.js, CSS, Javascript, HTML
            </li>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Project3