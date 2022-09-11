import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../Themes'




export default function Navigation() {

  const style = useContext(ThemeContext)
  
  return (
       
        <div style={style} className='navigation--btns col-8'>
          <button  className='nav--btn '><a href="#content--projects">Projects</a></button>
          <button className='nav--btn '>Info</button>
          <button className='nav--btn '>Resume</button>
          <button 
            className='nav--btn git--icon '
            onClick={() => window.open('https://github.com/nicolae-co', '_blank')}>
              <FontAwesomeIcon  icon={faGithub} />
          </button>
          <button 
            className='nav--btn linkedIn--icon '
            onClick={() => window.open('https://www.linkedin.com/in/nicolae-cojocaru-532119233/', '_blank')}>
            <FontAwesomeIcon  icon={faLinkedin} />
          </button>
          <button 
            className='nav--btn instagram--icon '
            onClick={() => window.open('https://www.instagram.com/iamnicolaescu/?hl=en', '_blank')}>
            <FontAwesomeIcon  icon={faInstagram} />
          </button>
        
    </div>
  )
}
