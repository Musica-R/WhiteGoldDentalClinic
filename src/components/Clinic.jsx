import '../style/Clinic.css';

const FACILITIES = [
  'Dental OPD',
  'Implant Centre',
  'High-Tech Procedure Rooms',
  'Private Rooms',
  'Dental & Implant Centre',
  'Mental Health Unit',
];

const MAP_QUERY = encodeURIComponent(
  'White Gold Dental Clinic & Implant Centre, Vadakkanthara Road, Palakkad'
);

export default function Clinic() {
  return (
    <section id="contact" className="clinic section">
      <div className="clinic__inner">
        <div className="clinic__info">
          <p className="eyebrow">Visit The Clinic</p>
          <h2>White Gold Dental Clinic &amp; Implant Centre</h2>

          <ul className="clinic__details">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              <span>
                1st Floor, Sree Ram Clinic, Opp. Devi Temple, Vadakkanthara
                Road, Vadakkanthara, Palakkad&nbsp;&ndash;&nbsp;678012, Kerala
              </span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 5c0 8.284 6.716 15 15 15l3-3.5-5-3-2 2c-2.5-1-4.5-3-5.5-5.5l2-2-3-5L5 4Z" strokeLinejoin="round" />
              </svg>
              <a href="tel:08075701526">080 7570 1526</a>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
              </svg>
              <span>Consultation Fee: &#8377;200 &middot; Beds Available: 1</span>
            </li>
          </ul>

          <div className="clinic__facilities">
            {FACILITIES.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>

          <div className="clinic__actions">
            <a
              href="https://maps.app.goo.gl/HmsK7f2pJUpamdiY9"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
            <a href="tel:08075701526" className="btn btn-outline">
              Call the Clinic
            </a>
          </div>
        </div>

        <div className="clinic__map">
          <iframe
            title="White Gold Dental Clinic Location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        
      </div>
    </section>
  );
}
