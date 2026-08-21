import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import '../style/ServicesPreview.css';
import '../style/animations.css';

const QUICK_TREATMENTS = [
  'Full Mouth Implant Rehabilitation',
  'RCT (Root Canal)',
  'Ceramic Crowns & Bridges',
  'Wisdom Tooth Extraction',
  'BPS Dentures Fixing',
  'Orthodontic Alignment',
];

export default function ServicesPreview() {
  const [sectionRef, inView] = useScrollReveal({ threshold: 0.3 });
  const r = (extra = '') => `${extra} reveal${inView ? ' is-visible' : ''}`.trim();

  return (
    <section id="services" className="services-preview section" ref={sectionRef}>
      <div className="services-preview__inner">
        <div className={r('services-preview__feature')} style={{ '--d': '0.05s' }}>
          <p className={r('eyebrow eyebrow--light')} style={{ '--d': '0.1s' }}>
            Signature Service
          </p>
          <h2 className={r()} style={{ '--d': '0.2s' }}>
            Full Mouth Implant Rehabilitation
          </h2>
          <p className={r()} style={{ '--d': '0.3s' }}>
            Comprehensive, implant-supported rehabilitation for missing or
            failing teeth &mdash; personalised, natural-looking and built to
            last, backed by an on-site Implant Centre.
          </p>
          <Link to="/contact" className={r('btn btn-gold')} style={{ '--d': '0.4s' }}>
            Book a Consultation
          </Link>
        </div>

        <div className={r('services-preview__grid')} style={{ '--d': '0.2s' }}>
          <p className="services-preview__grid-label">Popular Treatments</p>
          <ul>
            {QUICK_TREATMENTS.map((t, i) => (
              <li
                key={t}
                className={r()}
                style={{ '--d': `${0.3 + i * 0.08}s` }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <Link to="/services" className="services-preview__link">
            View All Services &amp; Treatments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}