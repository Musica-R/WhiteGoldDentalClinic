import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiImage,
  FiPhone,
  FiCalendar,
  FiArrowRight,
} from 'react-icons/fi';
import { FaTooth } from 'react-icons/fa6';
import '../style/Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/', icon: FiHome },
  { label: 'About', to: '/about', icon: FiUser },
  { label: 'Services', to: '/services', icon: FaTooth },
  { label: 'Smile Gallery', to: '/#gallery', icon: FiImage },
  { label: 'Contact', to: '/contact', icon: FiPhone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navbar is position:fixed, so it no longer takes up space in the
  // document flow on ANY page. This measures the navbar's real
  // rendered height (including its 16px/10px top offset) and feeds
  // that into a spacer element right below it, so every page's
  // content starts clear of the navbar instead of hiding behind it.
  // Re-measures on breakpoint changes (ResizeObserver) and on scroll
  // (since the --scrolled state shifts the top offset slightly).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => {
      const rect = el.getBoundingClientRect();
      setNavHeight(Math.ceil(rect.bottom));
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);
    window.addEventListener('resize', updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" onClick={closeMenu}>
            <img
              src="/assets/teeth-logo.png"
              alt="White Gold Dental Clinic logo"
              className="navbar__logo"
            />
            <span className="navbar__brand-text">
             <div> WHITE <strong>GOLD</strong></div>
              <div> <small>DENTAL CLINIC</small></div>
            </span>
          </Link>

          <nav
            id="primary-navigation"
            className={`navbar__links ${open ? 'is-open' : ''}`}
          >
            {NAV_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'is-active' : undefined
                  }
                  style={{ '--i': i }}
                  onClick={closeMenu}
                >
                  <Icon className="navbar__link-icon" aria-hidden="true" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}

            <Link
              to="/contact"
              className="btn btn-primary navbar__cta"
              style={{ '--i': NAV_LINKS.length }}
              onClick={closeMenu}
            >
              <FiCalendar className="navbar__cta-icon" aria-hidden="true" />
              <span>Book Appointment</span>
              <FiArrowRight className="navbar__cta-icon navbar__cta-icon--arrow" aria-hidden="true" />
            </Link>
          </nav>

          <button
            className={`navbar__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {open && <div className="navbar__overlay" onClick={closeMenu} />}
      </header>

      {/* Pushes every page's content down below the fixed navbar. */}
      <div className="navbar__spacer" style={{ height: navHeight }} aria-hidden="true" />
    </>
  );
}