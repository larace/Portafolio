import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const color = "red";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
