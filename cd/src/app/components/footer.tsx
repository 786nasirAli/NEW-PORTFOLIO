
// components/Footer.js
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Sikandar Ali. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li><a href="https://www.linkedin.com/in/sikandar-ali-44454724b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/786nasirAli" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.facebook.com/qureshi.bro.9" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
