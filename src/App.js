import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Reiki from './components/Reiki';
import Blog from './components/Blog';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Reiki />
      <Blog />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
