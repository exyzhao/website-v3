import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { gsap } from "gsap"
import { useState, useRef, useEffect } from "react"

import Home from "./views/Home"
import About from "./views/About"
import Portfolio from "./views/Portfolio"
import Contact from "./views/Contact"

const App = () => {
  document.body.addEventListener("mousemove", event => {
    const mouseX = event.pageX
    const mouseY = event.pageY

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })

    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })

  const pageContainer = useRef(null)
  const [height, setHeight] = useState()

  // Dummy state allows height to reset when user clicks
  const [dummy, setDummy] = useState(true)
  const handleClick = () => { setDummy(!dummy) }

  useEffect(() => {
    setHeight(pageContainer.current.clientHeight)
  }, [dummy])

  return (
    <Router>
      <div onClick={handleClick}>
        <div className="cursor" />
        <div className="shapes" style={{ minHeight: height }}>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="content">
          <div className="page-container" ref={pageContainer}>
            <Routes>
              <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App