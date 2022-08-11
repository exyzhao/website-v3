import React from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"

const Contact = () => {
  return (
    <FadeIn>
      <p class="back"><Link to="/">Back</Link></p>
      <h1>Contact</h1>
      <h2><a href="mailto:exyzhao@wharton.upenn.edu">exyzhao<br className="mobile-break"/>@wharton.upenn.edu</a></h2>
    </FadeIn>
  )
}

export default Contact