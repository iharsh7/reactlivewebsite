import React from 'react'
import './Navbar.css'
import logo from './assets/logo.png'
import contact from './assets/contact.png'
import {Link} from 'react-scroll';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='nav'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="content">
            <Link activeClass="active" 
      to="intro" 
      spy={true} 
      smooth={true} 
      offset={-87} 
      duration={500} 
      >Home</Link>
            <Link activeClass="active" to='about'  
            spy={true} 
            smooth={true} 
            offset={-87} 
            duration={500}>About</Link>
            <Link activeClass="active" to="portfolio" 
                        spy={true} 
                        smooth={true} 
                        offset={-87} 
                        duration={500}>Portfolio</Link>
            <Link activeClass="active" to="projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-87} 
                        duration={500} >Projects</Link>
            {/* <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">Projects</a> */}
        </div>
        <div className="extra">
            <button className='btn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contact} alt="" />
                Contact me
            </button>
        </div>
    </div>
  )
}

export default Navbar