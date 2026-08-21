import PageBanner from '../components/PageBanner';
import About from '../components/About';
import Specialties from '../components/Specialties';
import WhyChooseMe from '../components/WhyChooseMe';
import Highlights from '../components/Highlights';
import AppointmentCTA from '../components/AppointmentCTA';
import '../style/AboutPage.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageBanner
        eyebrow="About the Doctor"
        title="Dr. Girish B Viswanathan"
        desc="Dental Surgeon &mdash; BDS, MDS (Prosthodontist and Crown & Bridge). Leading White Gold  Dental Clinic & Implant Centre in Vadakkanthara, Palakkad."
        crumb="About"
        image={{
          src: '/assets/about.jpg',
          alt: 'White Gold Dental Clinic treatment room',
        }}
      />

      <section className="about-page__quals section">
        <div className="about-page__quals-inner">
          <div className="about-page__qual">
            <span>Qualification</span>
            <strong>BDS, MDS</strong>
            <p>Prosthodontist and Crown &amp; Bridge</p>
          </div>
          <div className="about-page__qual">
            <span>Role</span>
            <strong>Dental Surgeon</strong>
            <p>White Gold Dental Clinic &amp; Implant Centre</p>
          </div>
          <div className="about-page__qual">
            <span>Consultation Fee</span>
            <strong>&#8377;200</strong>
            <p>Straightforward, transparent pricing</p>
          </div>
        </div>
      </section>

      <About />
      {/* <Specialties /> */}
      <WhyChooseMe />
      <Highlights />
      <AppointmentCTA />
    </main>
  );
}
