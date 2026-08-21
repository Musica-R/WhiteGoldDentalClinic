import '../style/Highlights.css';

const HIGHLIGHTS = [
  {
    title: 'RCT (Root Canal)',
    desc: 'A frequently performed, highly refined procedure at the clinic to relieve pain and save natural teeth.',
  },
  {
    title: 'Dental Braces Fixing',
    desc: 'Orthodontic alignment and braces adjustment for a straighter, healthier bite.',
  },
  {
    title: 'Ceramic Crowns & Bridges Fixing',
    desc: 'A core prosthodontic strength \u2014 precise, natural-looking crown and bridge work.',
  },
];

export default function Highlights() {
  return (
    <section className="highlights section">
      <p className="eyebrow">Professional Highlights</p>
      <h2>Most Requested at White Gold</h2>

      <div className="highlights__row">
        {HIGHLIGHTS.map((h, i) => (
          <div key={h.title} className="highlight-card">
            <span className="highlight-card__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
