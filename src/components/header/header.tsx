import classNames from 'classnames';
import styles from './header.module.scss';
import { useState } from 'react';

export interface HeaderProps {
    className?: string;
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// ... (other imports)

export const Header = ({ className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <span>Jurify </span>
      <nav className={classNames(styles.nav, { [styles.mobileMenuOpen]: isMobileMenuOpen })}>
        <a href="/features" className={styles.active}>
          Features
        </a>
        <a href="/pricing" className={styles.active}>
          Pricing
        </a>
        <a href="/contact" className={styles.active}>
          Resources{' '}
        </a>
        <a href="/contact" className={styles.active}>
          Contact Us
        </a>
      </nav>
      <div className={styles.buttondiv}>
        <button className={styles.secondarybtn}>Login </button>
        <button className={styles.pributton}>Try for free</button>
      </div>
      <button className={styles.menuIcon} onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};