import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
//import Services from './components/Services'
//import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      {/* <Services /> */}
      {/* <Experience /> */}
      <Resume />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
