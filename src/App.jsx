import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section><Home /></section>
        <section><About /></section>
        <section></section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default App
