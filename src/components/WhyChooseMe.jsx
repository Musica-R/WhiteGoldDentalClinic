import '../style/WhyChooseMe.css';
import { FaUserDoctor, FaTooth, FaCouch, FaIndianRupeeSign } from 'react-icons/fa6';

const REASONS = [
  {
    title: 'Specialist-Led Care',
    desc: 'Every treatment plan is personally guided by an MDS Prosthodontist.',
    icon: <FaUserDoctor />,
  },
  {
    title: 'Advanced Implant Centre',
    desc: 'Dedicated implant and high-tech procedure rooms on-site.',
    icon: <FaTooth />,
  },
  {
    title: 'Comfort-First Environment',
    desc: 'Private rooms and a calm setting designed around patient ease.',
    icon: <FaCouch />,
  },
  {
    title: 'Transparent Pricing',
    desc: 'Clear consultation fee of \u20B9200 with no hidden treatment surprises.',
    icon: <FaIndianRupeeSign />,
  },
];

export default function WhyChooseMe() {
  return (
    <section className="why section">
      <div className="why__head">
        <p className="eyebrow">Why Choose White Gold</p>
        <h2>Built Around Patient Confidence</h2>
      </div>

      <div className="why__grid">
        {REASONS.map((r) => (
          <div key={r.title} className="why-card">
            <div className="why-card__icon">{r.icon}</div>
            <h3 className="why-card__title">{r.title}</h3>
            <p className="why-card__desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}