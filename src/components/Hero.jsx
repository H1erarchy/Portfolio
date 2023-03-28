import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Hero() {
  const heroStyles = {backgroundColor:"rgb(206,130,255)" , height:"100vh"}

  return (
    <div style={heroStyles}>
        <div>
            Teona Tskhadaia
        </div>
        <div>
            Software Developer
        </div>
        
        <Button variant="outline-warning"><a href="https://www.linkedin.com/in/teona-tskhadaia-89473a25a/"> Contact Me!</a></Button>

    </div>
    
    
  )
}
