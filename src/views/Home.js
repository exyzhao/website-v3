import React from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"

const Home = () => {
  return (
    <FadeIn>
      <h1>Ethan Zhao</h1>
      <h2 className="list-item">1. <Link to="/about">About</Link></h2>
      <h2 className="list-item">2. <Link to="/portfolio">Portfolio</Link></h2>
      <h2 className="list-item">3. <Link to="/contact">Contact</Link></h2>
    </FadeIn>
  )
}

export default Home