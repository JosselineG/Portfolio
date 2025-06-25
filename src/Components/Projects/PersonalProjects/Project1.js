import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/imagePrj1.PNG'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';

const Project1 = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                Design Pad
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


                        <img src={img1} alt='img1' />

                        <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href='https://github.com/JosselineG/design-pad'>

                            <h3>Code</h3>

                        </Button>

                    </div>

                    <div className='descriptionBox'>



                        <h1>Aim:</h1>

                        Group Project: Create a design similar to the one shown on the left.


                        <h1>Overview:</h1>

                        Users would be allowed to edit the design pad and fill it with a color that is
                        already assigned to each button by dragging a color from the pad buttons onto the design Pad.
                        My role was to create the padInput, which contains the functionalities of the buttons.

                        <h1>Development Tools:</h1>

                        <li>
                            Front-End: React.js, CSS, Javascript, HTML
                        </li>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1