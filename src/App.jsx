import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Logos from './components/Logos';
import Build from './components/Build';
import Chat from './components/Chat';
import Instantly from './components/Instantly';
import Creations from './components/Creations';
import Features from './components/Features'; 
import Footer from './components/Footer';
import WeatherWidget from './components/WeatherWidget';
import { useState } from 'react';
import './App.css'; 


function App() {

  return (
    
      <> 
      
        
        <div className="page">
          <div className="page__box">
            <Sidebar/>
            <WeatherWidget />
            <Header />
            <Hero />
            <Slider />
            <Logos />
            <Build />
            <Chat />
            <Instantly />
            <Creations />
            <Features />
            <Footer/>
          </div>
        </div>
        </>
      
    
  );
}

export default App;
