import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Hero() {
  const heroStyles = {backgroundColor:"rgb(3, 102, 101)" , height:"100vh"}

  return (
    <div style={heroStyles}>
        <div>
            Kissny Pierre
        </div>
        <div>
            Junior Software Developer
        </div>
        
        <Button variant="outline-warning"><a href="https://www.linkedin.com/in/kissny-pierre-6062748a/"> Contact Me!</a></Button>

    </div>
    
    
  )
}
