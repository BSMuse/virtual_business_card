import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>
      <img src='src/assets/headshot_2.png' alt='head shot of astonishingly handsome man'></img>
      <h1>Alexander Da Costa</h1>
      <h3>Web Developer</h3>
      <p className="website">alexanderdacosta.dev</p>
      <div className='buttons'>
        <a className="email" href='mailto:alexander.a.dacosta@gmail.com'>
          <img src="src/assets/mail.png" alt="linkedin logo" />  
          <p>Email</p>
        </a>
        <a className="linkedin" href='https://www.linkedin.com/in/alexander-dacosta/'>
        <img src="src/assets/linkedin.png" alt="linkedin logo" />  
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  )
}

export default Intro
