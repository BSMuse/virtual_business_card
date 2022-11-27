import React from 'react'
import './Footer.css'

function Footer() {
 return (
    <div className="footer">
        <a href='https://twitter.com/BSMinstrel'><img className="icon" src='src/assets/twitter_icon.png' alt='twitter icon'></img></a>
        <img className="icon"src='src/assets/facebook_icon.png' alt='facebook icon'></img>
        <img className="icon" src='src/assets/instagram_icon.png' alt='instagram icon'></img>
        <a href='https://github.com/BSMuse'><img className="icon" src='src/assets/github_icon.png' alt='github icon'></img></a>
    </div>
  )
}

export default Footer
