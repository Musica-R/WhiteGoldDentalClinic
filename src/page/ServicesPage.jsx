import PageBanner from '../components/PageBanner';
import Services from '../components/Services';
import ServiceCategories from '../components/ServiceCategories';
import Specialties from '../components/Specialties';
import AppointmentCTA from '../components/AppointmentCTA';
import '../style/ServicesPage.css';

const FACILITIES = [
  'Dental OPD',
  'Implant Centre',
  'High-Tech Procedure Rooms',
  'Private Rooms',
  'Dental & Implant Centre',
  'Mental Health Unit',
];


export default function ServicesPage() {
  return (
    <main className="services-page">
      
      <PageBanner
        eyebrow="Comprehensive Dental Care"
        title="Our Services &amp; Treatments"
        desc="From preventive care to full mouth implant rehabilitation &mdash; every treatment at White Gold Dental Clinic is delivered with precision, modern technology and a comfortable, private setting."
        crumb="Services"
        image={{
          src: '/assets/contac.jpg',
          alt: 'Dental imaging and implant technology',
        }}
      />

      <Services />
      <Specialties />
      <ServiceCategories />

      <section className="services-page__facilities sect-card">
        <p className="eyebrow">Clinic Facilities</p>
        <h2>Equipped For Every Procedure</h2>
        <div className="services-page__facilities-row">
          {FACILITIES.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
