import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Expertise } from './pages/Expertise';
import { Services } from './pages/Services';
import { Cases } from './pages/Cases';
import { Career } from './pages/Career';
import { Education } from './pages/Education';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { PageLoader } from './components/shared/PageLoader';

function App() {
  const [loadStatus, setLoadStatus] = useState(false)
  const location = useLocation();
  useEffect (() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoadStatus(true)
      }, 2000);
    });
  })
  useEffect(() => {
    if (!loadStatus) {
      document.body.className = 'loading'
    } else {
      document.body.className = ''
    }
  }, [loadStatus])
  useEffect(() => {
    let title = location.pathname
    if (title !== '/') {
      document.title = `RedDuck - ${(title.replace('/', ''))[0].toUpperCase() + title.slice(2)}`;
    }
  });
  return (
    ( loadStatus ?
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="expertise" element={<Expertise/>}/>
          <Route path="services" element={<Services/>} />
          <Route path="cases" element={<Cases/>} />
          <Route path="education" element={<Education/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="about" element={<About/>} />
          <Route path="blog" element={<Blog/>} />
        </Routes>
        <Footer />
      </div>
      :
      <PageLoader />
    )
  );
}

export default App;
