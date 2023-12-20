import React from 'react'
import './Projects.css'
import chatz from './assets/Chatz-logos.png'
import cart from './assets/logo_big.png'
import cross from './assets/pngwing.com.png'
const Projects = () => {
  return (
    <div id='projects' className='pro'>
        <div className="prome">
            <h2>My Projects</h2>
        </div>
        <div className="propara">
            <p>Here are some of my work on which I have tried my hand upon.</p>
        </div>
        <div className="container">
          <div className="containerdiv1">
            <div className="containerlogo">
              <img src={chatz} alt="" />
              
            </div>
            <div className="containercontent">
              <h2>Online chating Webpage</h2>
              <p> 
• A Messaging App which allows users to create accounts and chat with each other. <br />
• The website is developed using MERN stack, which includes MongoDB,Express,React, andNode.js. CSS is used forUI. <br />
• During Login JWT token is generated for user authentication and password is encrypted before storing in NoSql
database.</p>
<a href="https://github.com/iharsh7/chat_prototype">Github Link</a>
            </div>
          </div>
          <div className="containerdiv1">
            <div className="containerlogo">
              <img src={cross} alt="" />
              <a href=""></a>
            </div>
            <div className="containercontent">
              <h2>Tic-Tac-Toe</h2>
              <p>
• An online webpage which allows users to play tic-tac-toe with other player.
<br /> • The website is developed using ReactJs, which includes Express,React, and Node.js. CSS is used for UI</p>
<a href="https://github.com/iharsh7/NeuroNexus2">Github Link</a>
            </div>
          </div>
          <div className="containerdiv1">
            <div className="containerlogo">
              <img src={cart} alt="" />
            </div>
            <div className="containercontent">
              <h2>E-Commerce(Ongoing Project)</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects