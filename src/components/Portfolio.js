import React from 'react'
import './Portfolio.css'
import po1 from './assets/portfolio-1.png'
import po2 from './assets/portfolio-2.png'
import po3 from './assets/portfolio-3.png'
import po4 from './assets/portfolio-4.png'
import po5 from './assets/portfolio-5.png'
import po6 from './assets/portfolio-6.png'
const Portfolio = () => {
  return (
    <section className='work' id='portfolio'>
        <div className="mee">
            <h2>My portfolio</h2>
        </div>
        <div className="paraaa">
            <p>I take pride in paying attention to the smallest details and making sure that my work is pixel <br /> perfect. I am excited to bring my skills and experience to help businesses <br /> achieve their goals and create a string online presence. </p>
        </div>
        <div className="woork">
            <div className="woork1">
            {/* <img src={po1} alt="" /> */}
            <div className="wooork1">
            <img src={po1} alt="" />
            <div className="woooork1">
            <h2>Quick Learner</h2>
            </div>
            </div>
            <div className="wooork1">
            <img src={po2} alt="" />
            <div className="woooork1">
            <h2>Hard Working</h2>
            </div>
            </div>
            <div className="wooork1">
            <img src={po3} alt="" />
            <div className="woooork1">
            <h2>Team Friendly</h2>
            </div>
            </div>
            </div>
            <div className="woork1">
            <div className="wooork1">
            <img src={po4} alt="" />
            <div className="woooork1">
            <h2>Willing to learn new Tech.</h2>
            </div>
            </div>
            <div className="wooork1">
            <img src={po5} alt="" />
            <div className="woooork1">
            <h2>Patience.</h2>
            </div>
            </div>
            <div className="wooork1">
            <img src={po6} alt="" />
            <div className="woooork1">
            <h2>Punctual</h2>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio