import React from 'react'
import { useParams } from 'react-router-dom'

export default function Hero() {


const {name, apple} = useParams ()
console.log(apple)
  return (
    <div>
        <div>
            Teona Tskhadaia
        </div>
        <div>
            Software Developer
        </div>
        <button>  <a href="https://www.linkedin.com/in/teona-tskhadaia-89473a25a/"> Contact Me!</a></button>
{apple}
    </div>
    
    
  )
}
