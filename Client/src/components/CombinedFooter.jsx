// CombinedFooter.jsx
import React from 'react';
import styles from './CombinedFooter.module.css'; // Import the CSS Module

// --- Data for the footer sections ---

// Social media icons - assuming you have these SVG files in your public/icons/ directory
const SOCIAL_LINKS = [
  { name: 'Facebook', icon: '/icons/facebook.svg', href: '#', alt: 'Facebook icon' , height:"57" , width:"57" },
  { name: 'Instagram', icon: '/icons/instagram.svg', href: '#', alt: 'Instagram icon' , height:"57" , width:"57" },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', href: '#', alt: 'LinkedIn icon' , height:"57" , width:"57" },
  { name: 'YouTube', icon: '/icons/youtube.svg', href: '#', alt: 'YouTube icon' , height:"57" , width:"57" },
  { name: 'Twitter', icon: '/icons/twitter.svg', href: '#', alt: 'X (formerly Twitter) icon' , height:"57" , width:"57" },
];


const FIND_LAWYERS_LINKS = [
  { name: 'Criminal law', href: '#' },
  { name: 'Family law', href: '#' },
  { name: 'Corporate law', href: '#' },
  { name: 'Cyber law', href: '#' },
  { name: 'Finance & tax', href: '#' },
];

const FIND_DOCTORS_LINKS = [
  { name: 'Cardiologist', href: '#' },
  { name: 'Dermatologist', href: '#' },
  { name: 'General physician', href: '#' },
  { name: 'Neurologist', href: '#' },
  { name: 'Pulmonologist', href: '#' },
];

// App store badges - assuming you have these SVG/PNG files in your public/icons/ directory
const APP_STORE_LINKS = [
  { name: 'Google Play', icon: '/icons/google-play.svg', href: '#', alt: 'Google Play Store badge' },
  { name: 'App Store', icon: '/icons/app-store.svg', href: '#', alt: 'Apple App Store badge' },
];

const BOTTOM_NAV_LINKS = [
  { name: 'About Us', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Legal User Agreement', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Community Guidelines', href: '#' },
];

const CombinedFooter = () => {
  return (
    <div>
    <footer className={styles.combinedFooter}>
      {/* Top Section: Logo, Social, Links, Apps */}
      <div className={styles.topFooter}>
        <div className={styles.topFooterContentWrapper}>
          
          {/* Column 1: Logo & Social Media */}
          <div className={styles.columnSection1}>
            <div className={styles.logoWrapper}>
              {/* Using standard <img> tag, replace src with your logo path */}
              <img 
                src="/icons/infocalling.svg" // Adjust path to your logo
                alt="InfoCalling Logo"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                width="251" // Adjust based on your logo's aspect ratio
                height="56" // Adjust based on your logo's aspect ratio
              />
            </div>
            <div className={styles.socialIcons}>
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.href} className={styles.socialLink}>
                  <img src={link.icon} alt={link.alt} width="20" height="20" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Find Lawyers */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Find Lawyers</h3>
            <ul className={styles.columnLinks}>
              {FIND_LAWYERS_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.linkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Find Doctors */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Find Doctors</h3>
            <ul className={styles.columnLinks}>
              {FIND_DOCTORS_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.linkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Available on */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Available on</h3>
           <div className="d-flex mt-3 mt-lg-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="120" />
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width="120" className="ms-2" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: Copyright and Bottom Navigation */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
          
          {/* Copyright Notice */}
          <div className={styles.copyright}>
            © Enso Webworks Private Limited 2024. All Rights Reserved
          </div>
          
          {/* Bottom Navigation Links */}
          <nav className={styles.bottomNavLinks}>
            {BOTTOM_NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.bottomNavLink}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default CombinedFooter;