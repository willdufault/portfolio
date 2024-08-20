import NavigationBar from './components/sections/NavigationBar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Footer from './components/sections/Footer'

function App() {
  return (
    <>
      <article>
        <NavigationBar></NavigationBar>
        <Hero></Hero>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
      </article>
    </>
  )
}

export default App
