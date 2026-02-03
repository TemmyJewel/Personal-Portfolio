
import {Hero} from "@/sections/Hero"
import {About} from "@/sections/About"
import {Contact} from "@/sections/Contact"
import {Navbar} from "@/layout/Navbar"
import {Projects} from "@/sections/Projects"
// import {Footer} from "@/components/Footer"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </main>
    </div>
  )
}

export default App
