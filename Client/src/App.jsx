import Navbar from './common/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from "./component/Home"
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import About from './component/About'
// import Footer from './common/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}

    </>
  )
}

export default App
