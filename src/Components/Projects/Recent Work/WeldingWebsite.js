import React from 'react'
import '../PersonalProjects/Project.css'
import { Link } from 'react-router-dom'
import work2 from '../../Assets/Welding-Website.png'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';

const WeldingWebsite = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                R.P. Welding Solutions
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


                        <img src={work2} alt='work2' />

                        <Button variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href='https://www.rpweldingsolutions.com/'>

                            <h3>Code</h3>

                        </Button>

                    </div>

                    <div className='descriptionBox'>


                        <h1>Overview:</h1>
                       
                        Developed and deployed a responsive website using Squarespace for a welding company.
                      
                        <h1>Development Tools:</h1>

                   
                           Squarespace
                    


                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeldingWebsite