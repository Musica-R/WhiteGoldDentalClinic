import { Link } from 'react-router-dom';
import '../style/PageBanner.css';

export default function PageBanner({ eyebrow, title, desc, crumb, image }) {
  return (
    <section className="page-banner">
      <div className="page-banner__glow" aria-hidden="true" />
      <div className="page-banner__inner">
        <div className="page-banner__copy">
          <nav className="page-banner__crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{crumb}</span>
          </nav>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          {desc && <p className="page-banner__desc">{desc}</p>}
        </div>

        {image && (
          <div className="page-banner__media">
            <img src={image.src} alt={image.alt} />
          </div>
        )}
      </div>
    </section>
  );
}
