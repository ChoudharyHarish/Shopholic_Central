import React from 'react';
import "./About.css";

const BackgroundWrapper = ({title}) => {
  return (
    <div className='about-container'>
        <h1>{title}</h1>
    </div>
  )
}

export default BackgroundWrapper;