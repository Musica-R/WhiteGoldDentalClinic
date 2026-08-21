import { Link } from 'react-router-dom';
import '../style/Services.css';

const TREATMENTS = [
  'Maxillofacial Prosthetics',
  'Dental Restoration',
  'Straightening Teeth',
  'Tooth Reshaping',
  'Dental Implant Fixing',
  'BPS Dentures Fixing',
  'RCT (Root Canal)',
  'Wisdom Tooth Extraction',
  'Ceramic Crowns & Bridges',
  'Impacted Tooth Extraction',
  'Braces Adjustment',
  'Dental Sealant',
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="services__inner">
        <div className="services__feature">
          <p className="eyebrow eyebrow--light">Signature Service</p>
          <h2>Full Mouth Implant Rehabilitation</h2>
          <p>
            Transform your smile with comprehensive, implant-supported
            rehabilitation. Whether you&rsquo;re missing multiple teeth or
            seeking a complete makeover, our personalised approach &mdash;
            backed by advanced technology and a comfortable environment
            &mdash; restores oral function, aesthetics and confidence with
            durable, natural-looking results.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Book a Consultation
          </Link>

          <div className="services__facilities">
            <span>Implant Centre</span>
            <span>High-Tech Procedure Rooms</span>
            <span>Private Rooms</span>
            <span>Dental OPD</span>
          </div>
        </div>

        <div className="services__grid">
          <p className="services__grid-label">All Treatments</p>
          <ul>
            {TREATMENTS.map((t) => (
              <li key={t}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
