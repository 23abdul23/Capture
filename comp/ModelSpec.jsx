import React from 'react'
import './ModelSpec.css'
import accuracy from './accuracy.png'

import { BsBullseye } from "react-icons/bs";

function ModelSpec() {
  return (
    <div className='container'>
      <div className='modelspec'>
       <h3 id='mtitle' style={{textDecoration:"underline", textUnderlineOffset: "14px"}}>Model Specs</h3>
       <div className="cards">

          <div className="item">
          
              <div className="header">
                <img id="itemimg" src={accuracy} alt="Accuracy Icon" />
                <b style={{ color: '#39FF14', textDecoration:"underline", textUnderlineOffset: "10px" }}>Accuracy: 62.46%</b>
              </div>
              <div className='back'>
                <p>
                  The model has achieved an accuracy of 62.46% on the validation data. 
                  The current model can recognize on average 3 out of 5 characters correctly. 
                  Problems arise when characters like S, 5, and s need to be recognized.
                </p>
              
            </div>
          </div>

          <div className="item">
           
              <div className="header">
                <img id="itemimg" src={accuracy} alt="Accuracy Icon" />
                <b style={{ color: '#39FF14',textDecoration:"underline", textUnderlineOffset: "10px" }}>Image Recognition</b>
              </div>

              <div className="back">
                <p>
                  The model works like the MNIST Dataset,
                  where instead of 10 characters it tries to recognize 61 characters.Training Data is used by splitting each Imageinto 5 
                  sub images to make characters Training Set.
                </p>
              
            </div>
          </div>

          <div className="item">

            <div className="header">
              <img id="itemimg" src={accuracy} alt="Accuracy Icon" />
              <b style={{ color: '#39FF14', textDecoration:"underline", textUnderlineOffset: "10px" }}>Model: CNN</b>
            </div>

            <div className="back">
              <p>
              Model uses sequential function from the keras model with adam activation having learning rate of 0.005, It has 4 layers with a total of 
              1,202,741 Parameters. Last hidden layer has 500 neurons.
              </p>
            </div>
          </div>
       </div>
       
       
    </div>
    </div>
  )
}

export default ModelSpec
