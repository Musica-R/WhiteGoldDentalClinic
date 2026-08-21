import '../style/Testimonials.css';

// Placeholder testimonials -- replace with real, consented patient reviews.
const TESTIMONIALS = [
  {
    quote:
      'My implant treatment was explained clearly at every step, and the results feel completely natural. The whole team made me feel at ease.',
    name: 'Anjali M.',
    role: 'Implant Patient',
  },
  {
    quote:
      'I was nervous about my root canal, but the procedure was quick and painless. Genuinely one of the most comfortable dental visits I\u2019ve had.',
    name: 'Rahul K.',
    role: 'RCT Patient',
  },
  {
    quote:
      'The crown and bridge work matches my natural teeth perfectly. Professional, precise and patient about answering all my questions.',
    name: 'Sreedevi P.',
    role: 'Prosthodontic Patient',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="testimonials__head">
        <p className="eyebrow">Patient Stories</p>
        <h2>What Our Patients Say</h2>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="testimonial-card">
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="testimonial-card__quote">
              <path d="M0 24V14.4C0 6.2 5.2 1 12.6 0l1.6 3.8C9 5.4 6.6 8.6 6.4 12.8H13V24H0Zm16.4 0V14.4c0-8.2 5.2-13.4 12.6-14.4l1.6 3.8c-5.2 1.6-7.6 4.8-7.8 9h6.6V24H16.4Z" fill="#C9A227" />
            </svg>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
