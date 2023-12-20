import React, {useRef} from 'react'
import './Contact.css'
import youtube from './assets/youtube.png'
import facebook from './assets/facebook-icon.png'
import insta from './assets/instagram.png'
import twitter from './assets/twitter.png'
import linkdin from './assets/linkedin.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rgqwdtd', 'template_z9tc3fq', form.current, 'ZGdteIOMkx9b1qKOp')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact' id='contact'>
      <div className="headcontact">
        <h1>Contact Me</h1>
       
      </div>
      <div className="paracontact">
        <p>Please fill out the form below to discuss any work oportunities.</p>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inp">
            <input type="text" placeholder='Your Name' name='user_name'/>
            </div>
            <div className="inp">
            <input type="email" name="your_email"  placeholder='Your Email'/>
            </div>
            <div className="inp">
            <input type="text" name="message"  placeholder='Your Message'  className='message'/>
            </div>
            <div className="inp">
            {/* <input type="submit" value="Send" className='contbtn' /> */}
            <button type='submit' value="Send" className='contbtn'>Submit</button>
            </div>
            </form>
        </div>
        <div className="contlink">
        <img src={youtube} alt="youtube" />
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="insta" />
        <img src={twitter} alt="twitter" />
        <img src={linkdin} alt="linkdin" style={{height:41}} />
        </div>
    </div>

  )
}

export default Contact