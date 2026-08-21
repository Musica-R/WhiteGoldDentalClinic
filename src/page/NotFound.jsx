import { Link } from 'react-router-dom';
import '../style/NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found section">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C9.5 2 8 3.2 6.5 3.2 4.7 3.2 3 4.9 3 7.6c0 2.4.9 4.1 1.4 6.2.5 2.1.7 5.6 2.2 5.6 1.4 0 1.3-3.4 2.2-5 .4-.8.9-1.2 1.2-1.2.3 0 .8.4 1.2 1.2.9 1.6.8 5 2.2 5 1.5 0 1.7-3.5 2.2-5.6.5-2.1 1.4-3.8 1.4-6.2 0-2.7-1.7-4.4-3.5-4.4C16 3.2 14.5 2 12 2Z"
          stroke="#C9A227"
          strokeWidth="1.4"
        />
      </svg>
      <h1>404 &mdash; Page Not Found</h1>
      <p>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </main>
  );
}
