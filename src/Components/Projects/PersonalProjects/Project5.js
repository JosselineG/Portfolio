import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import img5 from '../../Assets/WordleCapt.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';

const Project5 = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                Wordle Clone (ES)
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

                        <img src={img5} alt='img5' />

                        <div className='GLButtons'>
                        <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href="https://github.com/JosselineG/Wordle-Clone">

                            <h3>Code</h3>

                        </Button>

                        <Button startIcon={<LanguageIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href="https://josselineg.github.io/Wordle-Clone/">

                            <h3>Site</h3>

                        </Button>
                        </div>
                    </div>



                    <div className='descriptionBox'>


                        <h1>Aim:</h1>

                        Build a web-based version of the popular game Wordle, 
                        Specifically, I would like the game to be created in Spanish.

                        <h1>Overview:</h1>

                        Users have to try and guess the 5 letter word in spanish.


                        <h1>Development Tools</h1>

                        Front-End: React.js, CSS, Javascript, HTML


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project5