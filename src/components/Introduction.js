import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './Introduction.css'
import profile from './assets/image.png'
import hireme from './assets/hireme.png'
import { Navigate } from 'react-router-dom';

const Introduction = () => {
    const [typeEffect] = useTypewriter({
        words: ["Website Designer","Programmer"],
        loop:{},
        autoStart:true,
        typeSpeed: 150,
        delaySpeed: 100
       })
  return (
    <div className='intro' id='intro'>
        <div className="leftintro">
            <div className="hlo">
                <p>Hello,</p>
            </div>
            <div className="iam">
                <h1>
                    I'm <span>Aryan</span> 
                </h1>
            </div>
            <div className="occupation">
                <h1>{typeEffect}</h1>
            </div>
            <div className="para">
                <p>I am a skilled and 
                    passionate web designer and programmer
                     <br /> with experience in creating visually
                      appealing and <br /> user-friendly websites.
                      </p>
            </div>
            <div className="Resume">
                <button className='resumebtn' >
                    <img src={hireme} alt="" />
                    <a href="https://github.com/iharsh7/Resume/blob/main/Aryan'sResume12Dec.pdf">Resume</a>
                </button>
            </div>
        </div>
        <div className="rightintro">
        {/* <img src={profile} alt="" /> */}
        </div>
    </div>
  )
}

export default Introduction