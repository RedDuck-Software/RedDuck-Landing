import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Expertise } from './pages/Expertise';
import { Services } from './pages/Services';
import { Cases } from './pages/Cases';
import { Career } from './pages/Career';
import { Education } from './pages/Education';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="expertise" element={<Expertise/>} />
        <Route path="services" element={<Services/>} />
        <Route path="cases" element={<Cases/>} />
        <Route path="career" element={<Career/>} />
        <Route path="education" element={<Education/>} />
        <Route path="contacts" element={<Contacts/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
