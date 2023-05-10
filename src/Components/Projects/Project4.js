import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import img4 from '../Assets/My Portfolio img1.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';

const Project4 = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>


                            <h4>
                                Portfolio
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

                        <img src={img4} alt='img4' />

                        <div className='GLButtons'>
                            <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href="https://github.com/JosselineG/Portfolio">

                                <h3>Code</h3>

                            </Button>
                            <Button startIcon={<LanguageIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href="https://josselineguardado.com/">

                                <h3>Site</h3>

                            </Button>
                        </div>

                    </div>


                    <div className='descriptionBox'>

                        <h1>Aim:</h1>

                        Create an updated version of my previous portfolio with the new knowledge I've acquired.
                        Portfolio should be Responsive.

                        <h1>Overview:</h1>

                        I wanted to create my portfolio as a single page website with a scrollable component.
                        I used the React Scroll package to achieve smooth scrolling between sections. On top of that,
                        I included some animations using the Framer Motion library.


                        <h1>Development Tools</h1>

                        <li>
                            Front-End: React.js, CSS, Material UI, Framer-Motion, Javascript, HTML
                        </li>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project4