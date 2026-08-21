import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Specialties from '../components/Specialties';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseMe from '../components/WhyChooseMe';
import SmileGallery from '../components/SmileGallery';
import Testimonials from '../components/Testimonials';
import Highlights from '../components/Highlights';
import ContactPreview from '../components/ContactPreview';
import AppointmentCTA from '../components/AppointmentCTA';
import '../style/Home.css';

// Home is the landing page: quick, impressive previews of the doctor,
// services and clinic, each linking ("navigate") to its own full page
// (/about, /services, /contact) for the complete details.
export default function Home() {
  return (
    <main className="home">
      <Hero />
      <AboutPreview />
      <Specialties />
      <ServicesPreview />
      <WhyChooseMe />
      <SmileGallery />
      <Testimonials />
      <ContactPreview />
      <Highlights />
      <AppointmentCTA />
    </main>
  );
}
