import React from 'react'
import './AboutSec.css'
function AboutSec() {
  return (
    <div className='about'>

      <h3 id='about' style={{color: "lime", textDecoration:"underline", textUnderlineOffset: "10px"}}>About</h3>
      <ul id='adesc'>
        <li>Our WEBDEV + ML project focuses on creating an advanced machine learning model designed to recognize and decode 5-character CAPTCHAs. 
        </li>
        <li>CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) is a security measure used to prevent bots from accessing online services.These tests are crucial for protecting websites against spam, fraud, and automated abuse by verifying that the user is human.
        </li>
        <li>
        Interestingly, CAPTCHA systems are constantly evolving to outpace increasingly sophisticated AI algorithms. The need for CAPTCHA is growing, as cyber threats continue to rise with the advancement of AI technology. </li>
        <li>
        In fact, CAPTCHAs have become more complex over time, incorporating distorted text, images, or puzzles to make it harder for automated systems to solve them. However, as we demonstrate in our project, machine learning models are now able to bypass even these more advanced CAPTCHA systems, pushing the boundaries of both security and AI capabilities.  
        </li>
     </ul>

    </div>
  )
}

export default AboutSec
