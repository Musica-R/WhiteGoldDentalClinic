import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Home from './page/Home';
import AboutPage from './page/AboutPage';
import ServicesPage from './page/ServicesPage';
import ClinicPage from './page/ClinicPage';
import NotFound from './page/NotFound';
import './style/index.css';
import MobileArrow from './components/MobileArrow';
import './style/animations.css';

export default function App() {
  return (
    <>
      <ScrollManager />
      <MobileArrow />
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ClinicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
