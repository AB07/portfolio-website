// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Certificates from './components/sections/Certificates';   // ← NEW: added import
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Certificates />          {/* ← NEW: added here */}
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}