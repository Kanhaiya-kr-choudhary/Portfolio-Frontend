import "./App.css";

import Footer from "./components/Footer/Footer";
import Herosection from "./components/HeroSection/Herosection";
import About from './components/About/About';
import Navbar from "./components/Navbar/navBar";
import Service from './components/Servicepage/Service';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Project from './components/Myprojects/Projects'
import Mycertificate from './components/Mycertificate/Mycertificate';
import Contact from './components/Contact/Contact';

function App() {


  return (

    <>
      <Navbar />
      <Herosection />
      <About />
      <Education />
      <Service />
      <Skills />
      <Project />
      <Mycertificate />
      <Contact />
      <Footer />



      {/* <Herosection />
      <ContactForm /> */}



    </>
  );
}

export default App;
