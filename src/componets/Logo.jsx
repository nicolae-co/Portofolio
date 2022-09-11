import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Logo() {

    const style = useContext(ThemeContext)

  return (
    <div style={style} className='col-2 logo'>
          <FontAwesomeIcon  icon={faCode} size='xl' />        
          <span className='navigation--logo--span'>nicolaeCDev</span>
        </div>
  )
}
