import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInfo, faFile, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../Themes'




export default function Navigation() {

  const style = useContext(ThemeContext)
  
  return (
       
        <div style={style} className='navigation--btns col-8'>
          <div className='navigation--btns--background'>
            <button  className='nav--btn '>
              <a href="#content--projects">
                <FontAwesomeIcon className='nav--icon' icon={faDiagramProject} />
                <span className='nav--comment'>Projects</span>
              </a></button>
            <button className='nav--btn '>
              <FontAwesomeIcon className='nav--icon' icon={faInfo} />
              <span className='nav--comment'>Info</span>
            </button>
            <button className='nav--btn '>
              <FontAwesomeIcon className='nav--icon' icon={faFile} />
              <span className='nav--comment'>Resume</span>
            </button>
            <button 
              className='nav--btn git--icon '
              onClick={() => window.open('https://github.com/nicolae-co', '_blank')}>
                <FontAwesomeIcon className='nav--icon' icon={faGithub} />
                <span className='nav--comment'>Github</span>
            </button>
            <button 
              className='nav--btn linkedIn--icon '
              onClick={() => window.open('https://www.linkedin.com/in/nicolae-cojocaru-532119233/', '_blank')}>
              <FontAwesomeIcon className='nav--icon' icon={faLinkedin} />
              <span className='nav--comment'>LinkedIn</span>
            </button>
          </div>
          
        
    </div>
  )
}
