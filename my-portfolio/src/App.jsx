import Bento from "./components/Bento"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Marquee from "./components/Marquee"

function App() {

  return (
    <div className="w-[calc(screen-3rem)] overflow-hidden">
      <Header />
      <Hero />
      <main>
        <Intro />
        <Bento />
        <Marquee />
      </main>
      <Footer />
    </div>
  )
}

export default App
