import React from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"

const About = () => {
  return (
    <FadeIn>
      <p class="back"><Link to="/">Back</Link></p>
      <h1>About</h1>
      <h2>Howdy, I'm Ethan!</h2>
      <p>
        I'm a sophomore at the University of Pennsylvania,
        in Wharton studying business and minoring in CS.
      </p>
      <p>
        On campus, I'm involved in <a href="https://pennspark.org/">Penn
          Spark</a> and <a href="https://www.pennsep.com/">SEP</a>.
      </p>
      <div class="horizontal">
        <div id="test">
          <h3>Interests:</h3>
          <p>• Startups</p>
          <p>• Product Design</p>
          <p>• Fullstack</p>
          <p>• Food & Restaurants</p>
        </div>
        <div>
          <h3>Previously:</h3>
          <p>• Frontend @ <a href="https://commoncents.org/">Common Cents</a></p>
          <p>• ML & Business Strategy @ <a href="https://watchcharts.com/">WatchCharts</a></p>
        </div>
        <div>
          <h3>Other:</h3>
          <p>• Board & Card Games</p>
          <p>• Volleyball & Lifting</p>
          <p>• 3D Modeling & Laser Cutting</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default About