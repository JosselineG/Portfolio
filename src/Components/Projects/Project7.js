import React from 'react';
import './Project.css';

import { Link } from 'react-router-dom';
/* import { Link } from 'react-scroll'; */
import img7 from '../Assets/RegisterCapt2.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';


const Project7 = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                Registration
                            </h4>

                        </div>
                    </div>


                    <div className='closeX'>
                        <Link to="/">
                         
                                <CloseOutlinedIcon sx={{ color: 'white' }} />
                      
                        </Link>

                    </div>
                </div>


                <div className='Sbox'>
                    <div className='ImgCode'>


                        <img src={img7} alt='img7' />

                        <Button

                            startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />}
                            variant="contained"
                            sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }}
                            target='_blank' rel="noreferrer" href="https://github.com/JosselineG/ConnectingBackEnd" >

                            <h3>Code</h3>

                        </Button>

                    </div>


                    <div className='descriptionBox'>

                        <h1>Aim:</h1>

                        Create a Registration Form

                        <h1>Overview:</h1>

                        Users should first fill out the form, the input data will be saved in the database.
                        After registering they should be able to login succesfully if the login input matches the
                        form input.

                        <h1>Development Tools</h1>

                        <li>
                            Front-End: React.js, CSS, Javascript, HTML, Bcryptjs
                        </li>
                        <li>
                            Back-End: Express, Node.js, MySQL, Bcryptjs
                        </li>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project7