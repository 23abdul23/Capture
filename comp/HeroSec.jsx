import React from 'react'
import './HeroSec.css'

import back from './back2.png'
import ghost from './ghost2-.png'

function HeroSec() {
  return (
    <div className='Hero'>
      <div className="left">
        <p id='look'>Look here Pookie!</p>
        <h2 className='terminal'>Wanna Capture?</h2>
        <p id='descp'></p>
      </div>

      <div className='right'>
        <img src={ghost} style={{height: 400, width: 400}}></img>
      </div>
      
    </div>
  )
}

export default HeroSec
