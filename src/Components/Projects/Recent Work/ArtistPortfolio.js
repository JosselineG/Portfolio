import React from 'react'
import '../PersonalProjects/Project.css'
import { Link } from 'react-router-dom'
import work1 from '../../Assets/Artist-Portfolio.png'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';

const ArtistPorfolio = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                Artist Portfolio
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


                        <img src={work1} alt='work1' />

                        <Button variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href='https://susansmolinski.com/'>

                            <h3>Code</h3>

                        </Button>

                    </div>

                    <div className='descriptionBox'>


                        <h1>Overview:</h1>

                        Mentored artist Susan Smolinski in building a user-friendly website which
                        showcases her work as an artist, utilizing the Wordpress platform.

                        <h1>Development Tools:</h1>

                        <li>
                           Wordpress
                        </li>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistPorfolio