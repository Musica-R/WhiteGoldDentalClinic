import { Link } from 'react-router-dom';
import { FaTooth, FaRegCalendarAlt } from 'react-icons/fa';
import '../style/CTA.css';

export default function AppointmentCTA() {
  return (
    <section className="cta sec">
      <div className="cta__banner">
        <div className="cta__copy">
          <FaTooth className="cta__icon" />
          <h2>Your Golden Smile Starts Here</h2>
          <p>Book a consultation with Dr. Girish B Viswanathan today.</p>
        </div>

        <Link to="/services" className="btn btn-gold cta__button new" >
          <FaRegCalendarAlt className="cta__button-icon" />
          View Treatments
        </Link>

        <img
          className="cta__photo"
          src="/assets/tooth.jpg"
          alt="Smiling patient"
        />
      </div>
    </section>
  );
}