import React from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"

const Portfolio = () => {
  return (
    <FadeIn>
      <p class="back"><Link to="/">Back</Link></p>
      <h1>Portfolio</h1>
      <h2>Coming soon!</h2>
    </FadeIn>
  )
}

export default Portfolio