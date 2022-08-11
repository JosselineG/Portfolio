import React from "react";
import { Link } from 'react-scroll'
import './NavBar.css'
import GitHubIcon from '@mui/icons-material/GitHub';


function NavBar() {


    return (
        <nav className="nav">
            <div className="navLinks">
                <div className="navLogo">
                    <Link to="/" smooth={true} spy={true} offset={0} duration={500}>
                        JG
                    </Link>
                </div>

                <div className="navList">
                    <ul>
                       
                        <li>
                            <Link to="AboutMe" smooth={true} spy={true} offset={-100} duration={500}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="Projects" smooth={true} spy={true} offset={-100} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="ContactMe" smooth={true} spy={true} offset={-100} duration={500}>
                                Contact Me
                            </Link>
                        </li>
                        <li>
                            <a className="gitLogo" rel="noreferrer" href="https://github.com/JosselineG">
                                
                                <GitHubIcon sx={{ color: 'white' ,fontSize: 20 }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default NavBar;