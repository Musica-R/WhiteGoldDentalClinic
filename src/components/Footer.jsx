import { Link } from 'react-router-dom';
import {
  FaTooth,
  FaShieldAlt,
  FaUserMd,
  FaHeart,
  FaChevronRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegClock,
  FaRegCalendarAlt,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaLock,
  FaFileContract,
} from 'react-icons/fa';

import '../style/Footer.css';

const exploreLinks = [
  { label: 'About the Doctor', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Smile Gallery', to: '/#gallery' },
  { label: 'Clinic & Facilities', to: '/facilities' },
  { label: 'Patient Testimonials', to: '/#testimonials' },
  { label: 'Contact Us', to: '/contact' },
];

const services = [
  'Orthodontic Alignment',
  'Advanced Preventive Dental Care',
  'Cosmetic Dentistry',
  'Pediatric Dental Care',
  'Maxillofacial Prosthetics',
  'Dental Restoration',
  'Straightening Teeth',
  'Tooth Reshaping',
  'Dental Implant Fixing',
  'BPS Dentures Fixing',
  'RCT (Root Canal)',
  'Wisdom Tooth Extraction',
];

const features = [
  { icon: <FaTooth />, label: 'Advanced Technology' },
  { icon: <FaShieldAlt />, label: 'Hygienic & Safe' },
  { icon: <FaUserMd />, label: 'Expert Dentists' },
  { icon: <FaHeart />, label: 'Patient Focused Care' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const mid = Math.ceil(services.length / 2);
  const servicesColA = services.slice(0, mid);
  const servicesColB = services.slice(mid);

  return (
    <footer className="wg-footer">
      {/* ---------- CTA banner ---------- */}
      <div className="wg-footer__cta">
        <div className="wg-footer__cta-inner">
          <div className="wg-footer__cta-left">
            <span className="wg-footer__cta-icon">
              <FaTooth />
            </span>
            <div>
              <h3>Your Smile. Our Priority.</h3>
              <p>
                Book a consultation and take the first step towards a
                healthier, brighter smile.
              </p>
            </div>
          </div>

          <Link to="/contact" className="wg-footer__cta-right">
            <span className="wg-footer__cta-icon wg-footer__cta-icon--outline">
              <FaRegCalendarAlt />
            </span>
            <span className="wg-footer__cta-text">Book Appointment</span>
            <span className="wg-footer__cta-arrow">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* ---------- Main footer ---------- */}
      <div className="wg-footer__main">
        <div className="wg-footer__inner">
          {/* Brand column */}
          <div className="wg-footer__brand">
            <Link to="/" className="wg-footer__logo">
              <FaTooth className="wg-footer__logo-icon" />
              <span>
                WHITE <strong>GOLD</strong>
                <small>DENTAL CLINIC</small>
              </span>
            </Link>
            <p>
              Advanced Dental Clinic &amp; Implant Centre led by
              Dr. Girish B Viswanathan &mdash; delivering expert care with
              compassion and modern technology.
            </p>

            <ul className="wg-footer__features">
              {features.map((f) => (
                <li key={f.label}>
                  <span className="wg-footer__feature-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore column */}
          <div className="wg-footer__col wg-footer__col--explore">
            <h4>Explore</h4>
            <ul>
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>
                    <span>{l.label}</span>
                    <FaChevronRight className="wg-footer__chevron" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="wg-footer__col wg-footer__col--services">
            <h4>Our Services</h4>
            <div className="wg-footer__services-grid">
              <ul>
                {servicesColA.map((s) => (
                  <li key={s}>
                    <FaTooth className="wg-footer__tooth" />
                    {s}
                  </li>
                ))}
              </ul>
              <ul>
                {servicesColB.map((s) => (
                  <li key={s}>
                    <FaTooth className="wg-footer__tooth" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact column */}
          <div className="wg-footer__col wg-footer__col--contact">
            <h4>Contact Us</h4>
            <ul className="wg-footer__contact-list">
              <li>
                <span className="wg-footer__contact-icon">
                  <FaPhoneAlt />
                </span>
                <a href="tel:08075701526">080 7570 1526</a>
              </li>
              <li>
                <span className="wg-footer__contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <a
                  href="https://maps.app.goo.gl/HmsK7f2pJUpamdiY9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vadakkanthara Road, Palakkad &ndash; 678012, Kerala, India
                </a>
              </li>
              {/* <li>
                <span className="wg-footer__contact-icon">
                  <FaEnvelope />
                </span>
                <a href="mailto:info@whitegolddentalclinic.com">
                  info@whitegolddentalclinic.com
                </a>
              </li> */}
            </ul>

            <div className="wg-footer__hours">
              <span className="wg-footer__hours-icon">
                <FaRegClock />
              </span>
              <div>
                <span className="wg-footer__hours-title">Clinic Hours</span>
                <p>
                  <strong>Mon - Sat</strong>&nbsp;:&nbsp;9:30 AM &ndash; 7:00 PM
                </p>
                <p>
                  <strong>Sunday</strong>&nbsp;:&nbsp;9:30 AM &ndash; 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="wg-footer__bottom">
        <div className="wg-footer__bottom-inner">
          <span className="wg-footer__copy">
            &copy; {year} White Gold Dental Clinic. All rights reserved.
          </span>

          <div className="wg-footer__legal">
            <Link to="/privacy">
              <FaLock /> Privacy Policy
            </Link>
            <Link to="/terms">
              <FaFileContract /> Terms &amp; Conditions
            </Link>
          </div>

          <div className="wg-footer__social">
            <span className="wg-footer__social-label">Follow Us</span>
            <a href="#" aria-label="Facebook" className="wg-footer__social-icon">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="wg-footer__social-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Google" className="wg-footer__social-icon">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}