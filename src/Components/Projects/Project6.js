import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import img6 from '../Assets/eCommercePreview.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';


const Project6 = () => {

    return (
        <div className='Project'>
            <div className='Pbox'>
                <div className='Pnav' >
                    <div className='tabs'>
                        <div className='tab1'>

                            <h4>
                                Ecommerce
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


                        <img src={img6} alt='img6' />

                        <Button startIcon={<GitHubIcon sx={{ fontSize: '25px' }} />} variant="contained" sx={{ width: '35%', height: '6vh', backgroundColor: "black", '&:hover': { backgroundColor: '#014760' } }} target='_blank' rel="noreferrer" href="https://github.com/JosselineG/Ecommerce-Template" >

                            <h3>Code</h3>

                        </Button>

                    </div>


                    <div className='descriptionBox'>
                        {/*    <span>    */}
                        <h1>Aim:</h1>

                        Create an Ecommerce Template using Redux

                        <h1>Overview:</h1>


                        Created an online bakery with a selection of products. In the shop component
                        the user has the option to choose the product that they decide to
                        add to the cart. The quantity of the product can be incremented in the shop component as
                        the "add to cart" button is pressed. It can also be incremented and decremented in the
                        cart component. The price of the products that have been chosen will be calculated
                        in the cart component. Redux is used to update data in the cart when an items quantity has been
                        incremented or decremented and update the total price in the cart.




                        <h1>Development Tools</h1>

                        <li>
                            Front-End: React.js, CSS, Javascript, HTML, Redux
                        </li>

                        {/*    </span>
 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project6