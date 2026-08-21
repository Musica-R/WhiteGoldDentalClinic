import { Link } from 'react-router-dom';
import '../style/About.css';

const STATS = [
  { value: 'BDS, MDS', label: 'Prosthodontics & Crown-Bridge' },
  { value: '\u20B9200', label: 'Consultation Fee' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about__inner">
        <div className="about__media">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
            alt="Dr. Girish B Viswanathan consulting a patient"
          />
          <div className="about__stats">
            {STATS.map((s) => (
              <div key={s.label} className="about__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">About the Clinic</p>
          <h2>
            Meet <span>Dr. Girish B Viswanathan</span>
          </h2>
          <p className="about__role" style={{color:"white"}}>
            Dental Surgeon &mdash; BDS, MDS (Prosthodontist and Crown &amp; Bridge)
          </p>
          <p className="about__desc">
            At White Gold Dental Clinic &amp; Implant Centre, care is
            built around precision prosthodontics and honest treatment
            planning. From single-tooth restorations to full mouth implant
            rehabilitation, every case is approached with a focus on
            long-term function, natural aesthetics and patient comfort.
          </p>
          <p className="about__desc">
            The clinic is equipped with a dedicated implant centre,
            high-tech procedure rooms and a private, comfortable environment
            &mdash; all located on the 1st Floor, Sree Ram Clinic, opposite
            Devi Temple, Vadakkanthara Road, Palakkad.
          </p>
          <Link to="/services" className="about__link">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
