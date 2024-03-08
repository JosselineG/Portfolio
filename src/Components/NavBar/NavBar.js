import React, { useState } from "react";
import { Link } from 'react-scroll'
import './NavBar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '@mui/material/Button';


function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => {

        //Click is set as false. It will reverse the value, returning the opposite.  !click; // Returns true. 


        if (!click) {
            console.log("Menu open");
            return setClick(true)


        }
        console.log("Menu closed");
        return setClick(false)

    }

    return (
        <nav className="nav">

            <div className="navLinks">
                <div className="dropDownBar">
                    <div className="navLogo">

                        <Link className="logo" to="/" smooth={true} spy={true} offset={0} duration={500}>
                            JG
                        </Link>

                    </div>

                    <div className='Menu'>

                        <Button

                            onClick={handleClick}
                            endIcon={<GiHamburgerMenu style={{ color: "white" }} />}>

                        </Button>

                    </div>
                </div>
                
                <div className="menuLinks">

                    {/*  simplified conditional operator like if / else. */}
                    {click ? (

                        <ul onClick={handleClick} >

                            <li>

                                <Link onClick={() => setClick(false)} to="AboutMe" smooth={true} spy={true} offset={-200} duration={500}>
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setClick(false)} to="Projects" smooth={true} spy={true} offset={-200} duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setClick(false)} to="ContactMe" smooth={true} spy={true} offset={-200} duration={500}>
                                    Contact Me
                                </Link>
                            </li>
                            <li>
                                <a className="gitLogo" rel="noreferrer" href="https://github.com/JosselineG">

                                    <GitHubIcon sx={{ color: 'white', fontSize: 20 }} />
                                </a>
                            </li>
                        </ul>) : null}
                </div>



                <div className="navList">
                    <ul>

                        <li>

                            <Link to="AboutMe" smooth={true} spy={true} offset={-60} duration={500}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="Projects" smooth={true} spy={true} offset={-55} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="ContactMe" smooth={true} spy={true} offset={-55} duration={500}>
                                Contact Me
                            </Link>
                        </li>
                        <li>
                            <a className="gitLogo" rel="noreferrer" href="https://github.com/JosselineG">

                                <GitHubIcon sx={{ color: 'white', fontSize: 20 }} />
                            </a>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>

    );
}
export default NavBar;