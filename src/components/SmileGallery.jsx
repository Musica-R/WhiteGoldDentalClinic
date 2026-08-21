import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../style/SmileGallery.css';

const GALLERY = [
  {
    src: '/assets/ortho.jpg',
    alt: 'Confident patient smiling after treatment',
  },
  {
    src: '/assets/im.jpg',
    alt: 'Dental implant procedure room',
  },
  {
    src: '/assets/wisdom.jpg',
    alt: 'Bright and comfortable clinic interior',
  },
  {
    src: '/assets/new2.jpg',
    alt: 'Close-up of healthy white smile',
  },
  {
    src: '/assets/root.jpg',
    alt: 'Dentist examining patient at White Gold Dental Clinic',
  },
  {
    src: '/assets/new1.jpg',
    alt: 'Dental X-ray imaging technology',
  },

  {
    src: '/assets/one.jpg',
    alt: 'Close-up of healthy white smile',
  },
];

export default function SmileGallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  const handlePrev = () => {
    const nextIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, GALLERY.length - 1);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = null;
    const handleScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(track.children);
        const trackLeft = track.scrollLeft + track.offsetLeft;
        let closest = 0;
        let closestDistance = Infinity;
        cards.forEach((card, i) => {
          const distance = Math.abs(card.offsetLeft - trackLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__head">
        <div>
          <p className="eyebrow">Smile Gallery</p>
          <h2>Real Results, Real Confidence</h2>
        </div>
        <Link to="/contact" className="btn btn-outline">
          Book Your Visit
        </Link>
      </div>

      <div className="gallery__carousel">
        <button
          type="button"
          className="gallery__arrow gallery__arrow--prev"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <div className="gallery__track" ref={trackRef}>
          {GALLERY.map((img, i) => (
            <div className="gallery__item" key={`${img.src}-${i}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--next"
          onClick={handleNext}
          disabled={activeIndex === GALLERY.length - 1}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="gallery__dots">
        {GALLERY.map((_, i) => (
          <button
            type="button"
            key={i}
            className={`gallery__dot ${i === activeIndex ? 'is-active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}