import React, {useState} from 'react'
import axios from 'axios'


export default function Quotegenerator() {

    const [quoteArrays, setQuoteArrays] = useState('')

    const getQuote = () =>{
        axios.get('https://type.fit/api/quotes')
        .then(response => {
            setQuoteArrays(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    let randomNumber = Math.floor(Math.random()*quoteArrays.length)

    console.log(quoteArrays.length)

   

  return (
    <div>
        <button onClick={getQuote}>New quote</button>
        {quoteArrays && 
        <>
            <p>{quoteArrays[randomNumber].text}</p>
            <p>{quoteArrays[randomNumber].author}</p>
        </> }
    </div>
  )
}
