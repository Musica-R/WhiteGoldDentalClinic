import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import '../style/Hero.css';
import '../style/animations.css';

export default function Hero() {
  const [sectionRef, inView] = useScrollReveal();
  const r = (extra = '') => `${extra} reveal${inView ? ' is-visible' : ''}`.trim();
  const rp = (extra = '') => `${extra} reveal-pop${inView ? ' is-visible' : ''}`.trim();

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className={r('hero__eyebrow')} style={{ '--d': '0.05s' }}>
            <span className="hero__eyebrow-dash" aria-hidden="true" />
            Palakkad&apos;s Trusted Dental &amp; Implant Centre
          </p>

          <h1 className={r('hero__title')} style={{ '--d': '0.15s' }}>
            Precision Dentistry.
            <br />
            <span className="hero__accent">Golden-Standard</span> Care.
          </h1>

          <p className={r('hero__desc')} style={{ '--d': '0.25s' }}>
            White Gold Dental Clinic &amp; Implant Centre is led by
            Dr. Girish B Viswanathan, a Prosthodontist &amp; Crown-Bridge
            specialist bringing precise, personalised implant and restorative
            dentistry to Vadakkanthara, Palakkad.
          </p>

          <div className={r('hero__actions')} style={{ '--d': '0.35s' }}>
            <Link to="/contact" className="hero__btn hero__btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 2v4M16 2v4M3.5 9h17M4 5h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Book Appointment
            </Link>
            <a href="tel:08075701526" className="hero__btn hero__btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 5c0 8.284 6.716 15 15 15l3-3.5-5-3-2 2c-2.5-1-4.5-3-5.5-5.5l2-2-3-5L5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Call 080 7570 1526
            </a>
          </div>

          <div className="hero__features">
            <div className={r('hero__feature')} style={{ '--d': '0.45s' }}>
              <span className="hero__feature-icon hero__feature-icon--teal">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2 4 5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="hero__feature-text">
                <strong>Advanced Technology</strong>
                <em>World-class equipment</em>
              </span>
            </div>

            <div className={r('hero__feature')} style={{ '--d': '0.55s' }}>
              <span className="hero__feature-icon hero__feature-icon--teal">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="hero__feature-text">
                <strong>Expert Care</strong>
                <em>Experienced Specialists</em>
              </span>
            </div>

            <div className={r('hero__feature')} style={{ '--d': '0.65s' }}>
              <span className="hero__feature-icon hero__feature-icon--gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 3 5 6 5c2 0 3.3 1.1 4 2.2C10.7 6.1 12 5 14 5c3 0 4.7 3 3.3 6.2C15 15.6 12 20 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="hero__feature-text">
                <strong>Patient Comfort</strong>
                <em>Gentle &amp; Comfortable</em>
              </span>
            </div>
          </div>
        </div>

        <div className={rp('hero__media')} style={{ '--d': '0.2s' }}>
          <div className="hero__frame">
            <img
              src="/assets/Home.jpg"
              alt="Dr. Girish B Viswanathan reviewing a dental X-ray with a patient at White Gold Dental Clinic"
            />
          </div>

          <div className={rp('hero__badge')} style={{ '--d': '0.8s' }}>
            <span className="hero__badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 4 5v5.5c0 5.2 3.4 9.4 8 10.5 4.6-1.1 8-5.3 8-10.5V5l-8-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M9.5 12.2c.6-1 1.2-1.5 1.9-1.5.9 0 1.5 1.3 2 2.6.5 1.3 1.1 2.6 2 2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <p className="hero__badge-text">
              Standard Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}