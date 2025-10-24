// TestimonialCard.jsx
import React from 'react';
import styles from './TestimonialCard.module.css';

/**
 * Renders a single testimonial card.
 * @param {object} props - Component props.
 * @param {string} props.type - 'doctor' or 'lawyer' to determine styling (background color).
 * @param {string} props.imageSrc - Source URL for the testimonial author's image.
 * @param {string} props.imageAlt - Alt text for the image.
 * @param {string} props.name - Name of the testimonial author.
 * @param {string} props.title - Title/Profession of the author (e.g., "Medical Director").
 * @param {number} props.rating - Star rating (e.g., 5 for 5 stars).
 * @param {string} props.quote - The testimonial quote itself.
 */
const TestimonialCard = ({ type, imageSrc, imageAlt, name, title, rating, quote }) => {
  // Determine card styling based on type (doctor/lawyer)
  const cardClasses = `${styles.cardContainer} ${type === 'lawyer' ? styles.lawyerCard : styles.doctorCard}`;
  const iconClasses = `${styles.quoteIcon} ${type === 'lawyer' ? styles.lawyerIcon : styles.doctorIcon}`;
  const quoteBgClasses = `${styles.quoteBackground} ${type === 'lawyer' ? styles.lawyerQuoteBg : styles.doctorQuoteBg}`;

  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? styles.filledStar : styles.emptyStar}>
          &#9733; {/* Unicode star character */}
        </span>
      );
    }
    return <div className={styles.starRating}>{stars}</div>;
  };

  return (
    <div>
    <div className={cardClasses}>
      {/* Background quote icon */}
      <div className={iconClasses}>
        {/* You could use an SVG here for a better icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.svgIcon}>
            <path d="M12.98 12.01L10 17h6c1.1 0 2-.9 2-2V7H6c-1.1 0-2 .9-2 2v6h2V9h10v5c0 .55-.45 1-1 1H8l2.98-5z"/>
        </svg>
      </div>

      {/* Main content area */}
      <div className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={imageAlt} className={styles.profileImage} />
        </div>
        <div className={quoteBgClasses}> {/* Quote background color */}
          <div className={styles.quoteDetails}>
            {renderStars()}
            <p className={styles.authorName}>{name}</p>
            <p className={styles.authorTitle}>{title}</p>
            <p className={styles.quoteText}>{`"${quote}"`}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;