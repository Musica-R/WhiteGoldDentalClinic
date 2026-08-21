import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaShieldAlt,
  FaRupeeSign,
  FaCalendarCheck,
  FaCheck,
  FaArrowRight,
  FaTooth,
  FaUserMd,
  FaSmile,
} from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import useScrollReveal from '../hooks/useScrollReveal';
import '../style/AboutPreview.css';
import '../style/animations.css';

const BADGES = [
  {
    icon: <FaGraduationCap />,
    value: 'BDS, MDS',
    label: 'Prosthodontist & Crown & Bridge Specialist',
  },
  {
    icon: <FaShieldAlt />,
    value: '15+',
    label: 'Years of Clinical Experience',
  },
  {
    icon: <FaRupeeSign />,
    value: '\u20B9200',
    label: 'Consultation Fee',
  },
];

const FEATURES = [
  {
    icon: <FaTooth />,
    title: 'Advanced Technology',
    desc: 'Modern equipment for precise & painless treatment.',
  },
  {
    icon: <FaUserMd />,
    title: 'Expert Specialist',
    desc: 'Specialized care in prosthodontics & dental implants.',
  },
  {
    icon: <BsShieldFillCheck />,
    title: 'Patient First Approach',
    desc: 'Comfortable environment with ethical care.',
  },
  {
    icon: <FaSmile />,
    title: 'Beautiful Smiles',
    desc: 'Restoring function and confidence for life.',
  },
];

export default function AboutPreview() {
  const [sectionRef, inView] = useScrollReveal();
  const r = (extra = '') => `${extra} reveal${inView ? ' is-visible' : ''}`.trim();
  const rp = (extra = '') => `${extra} reveal-pop${inView ? ' is-visible' : ''}`.trim();

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about__inner">
        {/* LEFT: media */}
        <div className={rp('about__media')} style={{ '--d': '0.1s' }}>
          <div className="about__photo-card">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="White Gold Dental Clinic treatment room"
            />
            <div className="about__badges">
              {BADGES.map((b, i) => (
                <div
                  key={b.label}
                  className={r('about__badge')}
                  style={{ '--d': `${0.25 + i * 0.1}s` }}
                >
                  <span className="about__badge-icon">{b.icon}</span>
                  <strong>{b.value}</strong>
                  <span className="about__badge-label">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={r('about__cta')} style={{ '--d': '0.55s' }}>
            <span className="about__cta-icon">
              <FaCalendarCheck />
              <span className="about__cta-check">
                <FaCheck />
              </span>
            </span>
            <div className="about__cta-text">
              <h4>Ready to transform your smile?</h4>
              <p>
                Book your appointment today and experience the White Gold
                standard of care.
              </p>
            </div>
            <Link to="/contact" className="about__cta-btn">
              Book Appointment
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* RIGHT: copy */}
        <div className="about__copy">
          <p className={r('eyebrow')} style={{ '--d': '0.05s' }}>About the Clinic</p>

          <h2 className={r()} style={{ '--d': '0.15s' }}>
            Meet <span>Dr. Girish B Viswanathan</span>
          </h2>

          <p className={r('about__role')} style={{ '--d': '0.25s', color: 'white' }}>
            Dental Surgeon &mdash; BDS, MDS (Prosthodontist and Crown &amp;
            Bridge)
          </p>

          <p className={r('about__desc')} style={{ '--d': '0.35s' }}>
            At White Gold Dental Clinic &amp; Implant Centre, care is built
            around precision prosthodontics and honest treatment planning.
            From single-tooth restorations to full mouth implant
            rehabilitation, every case is approached with a focus on
            long-term function, natural aesthetics and patient comfort.
          </p>

          <p className={r('about__desc')} style={{ '--d': '0.45s' }}>
            The clinic is equipped with a dedicated implant centre,
            high-tech procedure rooms and a private, comfortable
            environment &mdash; all located on the 1st Floor,
          </p>

          <p className={r('about__location')} style={{ '--d': '0.55s' }}>
            <MdLocationOn />
            Sree Ram Clinic, opposite Devi Temple, Vadakkanthara Road,
            Palakkad.
          </p>

          <div className="about__features">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={r('about__feature')}
                style={{ '--d': `${0.6 + i * 0.1}s` }}
              >
                <span className="about__feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}