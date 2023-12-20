import React from 'react'
import './About.css'
import webdesi from './assets/website-design.png'
import progrm from './assets/app-design.png'
const About = () => {
  return (
    <section className='about' id='about'>
        <div className="me">
            <h2>What I do</h2>
        </div>
        <div className="paraa">
            <p>I am a skilled and passionate web designer with experience in creating visually and user-friendly <br /> websites.
             I am proficient in HTML, CSS, 
              Reactjs, Javascript. <br /> Apart
               from this I am C++
                programmer who loves to code
                 and solve coding problems </p>
        </div>
        <div className="profile">
          <div className="div1">
          <div className="childdiv1">
            <img src={webdesi} alt="" />
          </div>
          <div className="childdiv2">
            <h2>Website design</h2>
            <p>My goal as a web designer is to create websites that make a positive difference in the world. <br /> I want to use my web design skills to help  people, organizations, and causes that I care about.<br />I also want to learn new technologies and frameworks that can enhance my web design capabilities. </p>

          </div>
        </div>
          <div className="div1">
          <div className="childdiv1">
            <img src={progrm} alt="" />
          </div>
          <div className="childdiv2">
            <h2>Programming</h2>
            <p>I love programming because it allows me to express my creativity and logic. I use languages like C++, Javascript and tools like  Visual Studio to program. I also follow blogs and podcasts about programming trends and best practices to keep myself updated and inspired.</p>

          </div>
        </div>
        </div>
    </section>
  )
}

export default About