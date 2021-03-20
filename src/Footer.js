import React from 'react'


function Footer(){
    return(
        <ul className="Footer">
            <li>
                <a className='contact-icon' href="mailto:darenmcc16@gmail.com" title="email" target="_blank" rel="noreferrer">
                Email
                </a>
            </li>
            <li>
                <a className='contact-icon' href="https://github.com/darenmcc16" title="github" target="_blank" rel="noreferrer">github</a> 
            </li>
            <li>
                <a className='contact-icon' href="https://www.linkedin.com/in/daren-mccarrell/" title="linkin" target="_blank" rel="noreferrer">linkedin</a>
            </li>
        </ul>
    )
}

export default Footer;