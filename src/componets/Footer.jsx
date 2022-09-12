import React from "react"
import { useContext } from "react"
import ThemeContext from "../Themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  
  const style = useContext(ThemeContext)
    return (
      <div style={style} className='footer row'>
        <form style={style} className='footer--form col-6 offset-3'>
          <h3 style={style} className='footer--form--h3'>Get in touch</h3>
          <div className='footer--form--area row'>
            <div className='footer--input--area col-6'>
              <input  className='footer--input' type='text' id='name' placeholder='Your name' required></input>
              <input className='footer--input' type='email' id='email' placeholder='Your email' required></input>
              <input className='footer--input' type='text' id='phone' placeholder='Phone number'></input>
            </div>          
            <textarea className='footer--textarea col-6' id='message' rows='4' placeholder='How can I help you?'></textarea>
          </div>
          <button className='footer--btn col-2 offset-5' type='submit'>
              <FontAwesomeIcon className='footer--icon' icon={faPaperPlane} />
              <span className='footer--comment'>Submit</span>
          </button>
        </form>
      </div>
    )
  }

