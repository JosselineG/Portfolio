import React from 'react';
import './ContactMe.css'
import SendIcon from '@mui/icons-material/Send';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullName: "", email: "", message: "" };
  }

  handleChange = (e) => {

    this.setState({ ...this.state, [e.target.name]: e.target.value })
    
  }

  handleSubmit = (e) => {


    alert("message sent!" + this.state.fullName + " | " + this.state.email + " | " + this.state.message)
    this.setState({ fullName: "", email: "", message: "" })
    e.preventDefault();
  }


  render() {
    return (
      <div className='cont' id='ContactMe'>
        <h1>Contact</h1>

        <div className='fo'>
          <div className='formBox'>

            <form >
              <label htmlFor='fullName'>
                Name:
              </label>
              <input
                type={"text"}
                name='fullName'
                onChange={(e) => this.handleChange(e)}
                value={this.state.fullName} />

              <label htmlFor='email'>
                Email:
              </label>
              <input
                type={"email"}
                name='email'
                onChange={(e) => this.handleChange(e)}
                value={this.state.email} />

              <label htmlFor='message'>
                Message:
              </label>
              <textarea
                type={"text"}
                name="message"
                onChange={(e) => this.handleChange(e)}
                value={this.state.message} />

              <div className="btonContainer">
                <button type='submit'
                  onClick={(e) => this.handleSubmit(e)}>
                  Send
                  <SendIcon sx={{ fontSize: 15 }} />
                </button>
              </div>

            </form>
          </div>


          <div className="info">
            <span>
              
              If you have any questions or want to say hello, 
              contact me by filling out the form or emailing me at
              guardadojosseline@gmail.com
            
            </span>
          </div>

        </div>



      </div>
    );
  }
}
export default ContactMe;
