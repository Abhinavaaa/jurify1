// Import statements for other components, libraries, and FontAwesome icons
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleResourcesClick = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.logo}>
                <a href="/" className={styles.logo}>
                    Jurify
                </a>
            </span>
            <nav className={classNames(styles.nav, { [styles.mobileMenuOpen]: isMobileMenuOpen })}>
                <a href="/features" className={classNames(styles.active, styles.navitems)}>
                    Features
                </a>
                <a href="/pricing" className={classNames(styles.active, styles.navitems)}>
                    Pricing
                </a>
                <div
                    className={classNames(styles.active, styles.navitems, styles.dropdownContainer)}
                >
                    <a
                        href=""
                        className={classNames({ [styles.active]: isResourcesDropdownOpen })}
                        onClick={handleResourcesClick}
                    >
                        Resources
                    </a>
                    {isResourcesDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Docs</a>
                            </li>
                            <li>
                                <a href="#">Blogs 2</a>
                            </li>
                            <li>
                                <a href="#">Option 3</a>
                            </li>
                        </ul>
                    )}
                </div>
                <a href="/contact" className={classNames(styles.active, styles.navitems)}>
                    Contact Us
                </a>
            </nav>
            <div className={classNames(styles.buttondiv, styles.login)}>
                <button className={styles.secondarybtn}>Login </button>
                <button className={classNames(styles.pributton, styles.goldgrad)}>
                    Try for free
                </button>
            </div>
            <button className={styles.menuIcon} onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    );
};
