import useScrollReveal from '../hooks/useScrollReveal';
import '../style/Specialties.css';
import '../style/animations.css';

const SPECIALTIES = [
  {
    title: 'Prosthodontics',
    desc: 'Custom crowns, bridges and dentures restoring bite, function and a natural smile.',
    image: '/assets/11.png',
  },
  {
    title: 'Full Mouth Implant Rehabilitation',
    desc: 'Complete, durable implant-supported solutions for missing or failing teeth.',
    image: '/assets/12.png',
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Precise, comfortable RCT to save natural teeth and relieve pain.',
    image: '/assets/13.png',
  },
  {
    title: 'Orthodontic Alignment',
    desc: 'Braces and aligner-based correction for a well-balanced, confident smile.',
    image: '/assets/14.png',
  },
  {
    title: 'Oral & Maxillofacial Surgery',
    desc: 'Surgical extractions, orthognathic and oral surgical procedures.',
    image: '/assets/15.png',
  },
  {
    title: 'Preventive & Restorative Care',
    desc: 'Sealants, fillings and oral lesion screening to protect long-term health.',
    image: '/assets/16.png',
  },
];

const STATS = [
  {
    key: 'tech',
    label: ['Advanced', 'Technology'],
    icon: <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />,
  },
  {
    key: 'team',
    label: ['Experienced', 'Specialists'],
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9.5" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14.6c2.6.4 4.5 2.5 4.5 5.4" />
      </>
    ),
  },
  {
    key: 'comfort',
    label: ['Patient Comfort', 'Guaranteed'],
    icon: (
      <path d="M12 20s-7-4.4-9.5-8.6C.8 8.1 2.3 4.8 5.6 4.1 8 3.6 10.2 5 12 7.2 13.8 5 16 3.6 18.4 4.1c3.3.7 4.8 4 3.1 7.3C19 15.6 12 20 12 20Z" />
    ),
  },
];

export default function Specialties() {
  const [sectionRef, inView] = useScrollReveal();
  const r = (extra = '') => `${extra} reveal${inView ? ' is-visible' : ''}`.trim();

  return (
    <section id="specialties" className="specialties" ref={sectionRef}>
      <span className="specialties__deco-dots" aria-hidden="true" />
      <svg
        className="specialties__deco-tooth"
        viewBox="0 0 200 240"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 10c-22 0-36 12-52 12-18 0-33 16-33 41 0 20 8 34 12 52 5 18 7 49 20 49 11 0 11-30 20-43 3-7 8-10 11-10s8 3 11 10c9 13 9 43 20 43 13 0 15-31 20-49 4-18 12-32 12-52 0-25-15-41-33-41-16 0-30-12-52-12Z"
          fill="currentColor"
        />
      </svg>

      <div className="specialties__container">
        <div className="specialties__head">
          <p className={r('specialties__eyebrow')} style={{ '--d': '0.05s' }}>
            <span className="specialties__eyebrow-dash" />
            OUR SERVICES
          </p>
          <h2 className={r('specialties__title')} style={{ '--d': '0.15s' }}>
            Complete Dental Care
            <br />
            for a <span className="specialties__title-accent">Healthy Smile</span>
          </h2>
          <p className={r('specialties__lead')} style={{ '--d': '0.25s' }}>
            Focused expertise in prosthodontics and implant dentistry, backed
            by a full range of restorative and surgical treatments.
          </p>
          <span className="specialties__rule" />
        </div>

        <div className="specialties__grid">
          {SPECIALTIES.map((item, i) => {
            // Top row (0,1,2) drops down from above.
            // Bottom row (3,4,5) rises up from below.
            const direction = i < 3 ? 'reveal-down' : 'reveal-up';
            const stateClass = `${direction}${inView ? ' is-visible' : ''}`;

            return (
              <article
                key={item.title}
                className={`specialty-card ${stateClass}`}
                style={{ '--d': `${i * 0.15}s` }}
              >
                <div className="specialty-card__icon">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
                <div className="specialty-card__body">
                  <span className="specialty-card__dash" />
                  <h3 className="specialty-card__title">{item.title}</h3>
                  <p className="specialty-card__desc">{item.desc}</p>
                </div>
                <button
                  type="button"
                  className="specialty-card__arrow"
                  aria-label={`Learn more about ${item.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </article>
            );
          })}
        </div>

        <div className={r('specialties__cta')} style={{ '--d': '1s' }}>
          <div className="cta__intro">
            <div className="cta__badge">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-2 0-3.2 1-4.6 1-1.6 0-2.9 1.4-2.9 3.6 0 1.8.7 3 1.1 4.6.4 1.6.6 4.3 1.7 4.3 1 0 1-2.6 1.7-3.8.3-.6.7-.9 1-.9.3 0 .7.3 1 .9.7 1.2.7 3.8 1.7 3.8 1.1 0 1.3-2.7 1.7-4.3.4-1.6 1.1-2.8 1.1-4.6 0-2.2-1.3-3.6-2.9-3.6C15.2 4 14 3 12 3Z" />
              </svg>
              <span className="cta__spark" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.2 4.8L18 8l-4.8 1.2L12 14l-1.2-4.8L6 8l4.8-1.2L12 2Z" />
                </svg>
              </span>
            </div>
            <div className="cta__copy">
              <h3>Your Smile. Our Priority.</h3>
              <p>
                We combine advanced technology with compassionate care to
                deliver exceptional dental experiences.
              </p>
            </div>
          </div>

          <div className="cta__stats">
            {STATS.map((stat, i) => (
              <div
                key={stat.key}
                className={r('cta__stat')}
                style={{ '--d': `${1.1 + i * 0.1}s` }}
              >
                <span className="cta__stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {stat.icon}
                  </svg>
                </span>
                <span className="cta__stat-label">
                  {stat.label[0]}
                  <br />
                  {stat.label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}