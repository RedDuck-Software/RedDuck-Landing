import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Expertise } from './pages/Expertise';
import { Services } from './pages/Services';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="expertise" element={<Expertise/>} />
        <Route path="services" element={<Services/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
