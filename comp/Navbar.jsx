import React from 'react'
import './Navbar.css'
import logo from './logo.png'

function Navbar() {
  const scrollToSection = function(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
   
    <ul className='nav'>
        <div className="nleft">
          <span>Capture</span>
          <img src={logo} alt="" />
        </div>

        <div className="nright"> 
            <li><button onClick={()=>scrollToSection('home')}>Home</button></li>
            <li><button onClick={()=>scrollToSection('about')}>About</button></li>
            <li><button onClick={()=>scrollToSection('model')}>ModelSpecs</button></li>
            <li><button onClick={()=>scrollToSection('capture')}>Upload</button></li>
        </div>
    </ul>
</div>

  )
}

export default Navbar
