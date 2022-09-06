import React from "react";
import './Footer.css';
import Button from '@mui/material/Button'

import { AiFillGithub } from 'react-icons/ai';

function Footer() {

    return (
        <footer className="Footer">

            <h4> 
                JG. All Rights Reserved. 
            </h4>
            <Button href="https://github.com/JosselineG"><AiFillGithub style={{ color:"white", width: "40px", height: "40px" }}/></Button>
        
        </footer>

    );
}

export default Footer