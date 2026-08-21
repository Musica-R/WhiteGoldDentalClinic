import {
  GiTooth,
} from 'react-icons/gi';
import { FaUserDoctor, FaHandHoldingMedical } from 'react-icons/fa6';
import { MdAssignment, MdHealthAndSafety } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';
import '../style/ServiceCategories.css';

const CATEGORIES = [
  {
    title: 'Services',
    icon: <FaHandHoldingMedical />,
    image: '/assets/4.png',
    items: [
      'Orthodontic Alignment',
      'Advanced Preventive Dental Care',
      'Cosmetic Dentistry',
      'Pediatric Dental Care',
    ],
  },
  {
    title: 'Procedures',
    icon: <GiTooth />,
    image: '/assets/5.png',
    items: [
      'Impacted Tooth Extraction',
      'Fixed Prosthodontics',
      'Crown & Bridge',
      'Veneers',
    ],
  },
  {
    title: 'Therapy',
    icon: <MdHealthAndSafety />,
    image: '/assets/6.png',
    items: ['Oral Rehabilitation', 'TMJ Therapy', 'Gum Therapy'],
  },
  {
    title: 'Treatment',
    icon: <GiTooth />,
    image: '/assets/1.png',
    items: [
      'Maxillofacial Prosthetics',
      'Dental Restoration',
      'Straightening Teeth',
      'Tooth Reshaping',
      'Dental Implant Fixing',
      'BPS Dentures Fixing',
      'RCT (Root Canal)',
      'Wisdom Tooth Extraction',
    ],
  },
  {
    title: 'Surgery',
    icon: <FaUserDoctor />,
    image: '/assets/2.png',
    items: ['Oral & Maxillofacial Surgery', 'Orthognathic Surgery', 'Surgical Tooth Extraction'],
  },
  {
    title: 'Tests',
    icon: <MdAssignment />,
    image: '/assets/3.png',
    items: ['X-Ray', 'Oral Lesions Screening'],
  },
  
];

export default function ServiceCategories() {
  return (
    <section className="service-cats">
      <p className="eyebrow">Complete Range</p>
      <h2>Treatments &amp; Procedures by Category</h2>

      <div className="service-cats__grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="service-cats__card">
            {/* everything except the button lives in body, so the button
                can be pinned to the bottom with margin-top:auto */}
            <div className="service-cats__body">
              <div className="service-cats__header">
                <span className="service-cats__icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>

              <ul>
                {cat.items.map((item) => (
                  <li key={item}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#14b8a6"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <img
              className="service-cats__img"
              src={cat.image}
              alt={cat.title}
              loading="lazy"
            />

            <button type="button" className="service-cats__btn">
              View All <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}