import { Link } from 'react-router-dom';
import '../style/ContactPreview.css';

export default function ContactPreview() {
  return (
    <section id="contact-preview" className="contact-preview section-contact">
      <div className="contact-preview__card">
        <div className="contact-preview__copy">
          <p className="eyebrow">Visit The Clinic</p>
          <h2>White Gold Dental Clinic &amp; Implant Centre</h2>
          <ul className="contact-preview__details">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              1st Floor, Sree Ram Clinic, Vadakkanthara Road, Palakkad&nbsp;&ndash;&nbsp;678012
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 5c0 8.284 6.716 15 15 15l3-3.5-5-3-2 2c-2.5-1-4.5-3-5.5-5.5l2-2-3-5L5 4Z" strokeLinejoin="round" />
              </svg>
              080 7570 1526
            </li>
          </ul>
        </div>

        <div className="contact-preview__actions">
          <Link to="/contact" className="btn btn-primary">
            View Location &amp; Full Details
          </Link>
          <a href="tel:08075701526" className="btn btn-outline">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
