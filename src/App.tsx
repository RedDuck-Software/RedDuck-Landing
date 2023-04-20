import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { PageLoader } from './components/shared/PageLoader';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Cases } from './pages/Cases';
import { Contacts } from './pages/Contacts';
import { Education } from './pages/Education';
import { Expertise } from './pages/Expertise';
import { Home } from './pages/Home';
import { Services } from './pages/Services';

function App() {
  const [loadStatus, setLoadStatus] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoadStatus(true);
      }, 2000);
    });
  });
  useEffect(() => {
    if (!loadStatus) {
      document.body.className = 'loading';
    } else {
      document.body.className = '';
    }
  }, [loadStatus]);
  useEffect(() => {
    const title = location.pathname;
    if (title !== '/') {
      document.title = `RedDuck - ${
        title.replace('/', '')[0].toUpperCase() + title.slice(2)
      }`;
    }
  });
  return loadStatus ? (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="services" element={<Services />} />
        <Route path="cases" element={<Cases />} />
        <Route path="education" element={<Education />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  ) : (
    <PageLoader />
  );
}

export default App;
