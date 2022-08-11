import React from 'react';
import './ContactMe.css'
import SendIcon from '@mui/icons-material/Send';

function ContactMe() {




  return (
    <div className='cont' id='ContactMe'>
      <h1>Contact</h1>

      <div className='fo'>
        <div className='formBox'>

          <form >
            <label>
              Name:
            </label>
            <input
              type={"text"} />

            <label>
              Email:
            </label>
            <input
              type={"email"} />

            <label>
              Message:
            </label>
            <textarea
              type={"text"}
           /*  placeholder="Message" */ />

            <div className="btonContainer">
              <button type='submit' >
                Send
                <SendIcon sx={{ fontSize: 15 }} />
              </button>
            </div>

          </form>
        </div>


        <div className="info">
          <h3>If you have any questions or want to say hello, contact me by filling out the form or emailing me at
            guardadojosseline@gmail.com</h3>
        </div>

      </div>



    </div>
  );
}

export default ContactMe;
