import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Events from './Pages/Events'
import Tickets from './Pages/Tickets'
import Speakers from './Pages/Speakers'
import Sponsors from './Pages/Sponsors'
import Gallery from './Pages/Gallery'
import FAQLocation from './Pages/FAQLocation'
import Footer from './Pages/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Tickets />
      <Speakers />
      <Sponsors />
      <Gallery />
      <FAQLocation />
      <Footer />
    </div>
  )
}

export default App
