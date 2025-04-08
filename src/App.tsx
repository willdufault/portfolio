import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <article>
        <NavigationBar></NavigationBar>
        <Hero></Hero>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Education></Education>
        <Footer></Footer>
      </article>
    </>
  )
}

export default App
