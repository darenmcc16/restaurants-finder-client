import React from 'react'
import './app.css'



function Footer(){
    return(
        <ul className="Footer">
            <li>
                <a className='contact-icon' href="mailto:darenmcc16@gmail.com" title="email" target="_blank" rel="noopener noreferrer">
                Email
                </a>
            </li>
            <li>
                <a className='contact-icon' href="https://github.com/darenmcc16" title="github" target="_blank" rel="noopener noreferrer">
                Github
                </a> 
            </li>
            <li>
                <a className='contact-icon' href="https://www.linkedin.com/in/daren-mccarrell/" title="linkin" target="_blank" rel="noopener noreferrer">
                Linkedin
                </a>
            </li>
        </ul>
    )
}

export default Footer;