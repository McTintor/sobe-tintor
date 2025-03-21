import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section id="pocetna"><Home /></section>
        <section id="onama"><About /></section>
        <section id="galerija"><Gallery /></section>
        <section id="kontakt"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
