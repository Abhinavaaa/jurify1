// Footer.jsx
import React from 'react';
import classNames from 'classnames';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.footerminisec, styles.logo)}>
                <a href="/" className={styles.logo}>
                    Jurify
                </a>
                <div className={styles.small}>
                    <div className={styles.small}>&copy;{new Date().getFullYear()}Jurify.</div>
                    <text>All Rights Reserved.</text>
                </div>
            </div>
            <div className={styles.footersec}>
                <div className={styles.footerminisec}>
                    <label className={styles.headings}>Company</label>
                    <a href="/" className={styles.link}>
                        About
                    </a>
                    <a href="/" className={styles.link}>
                        Careers
                    </a>
                    <a href="/" className={styles.link}>
                        Contact Us
                    </a>
                </div>
                <div className={styles.footerminisec}>
                    <label className={styles.headings}>Product</label>
                    <a href="/" className={styles.link}>
                        Pricing
                    </a>
                    <a href="/" className={styles.link}>
                        Security
                    </a>
                    <a href="/" className={styles.link}>
                        Resources
                    </a>
                    <a href="/" className={styles.link}>
                        FAQ
                    </a>
                </div>
                <div className={styles.footerminisec}>
                    <a href="/" className={styles.link}>
                        Privacy policy
                    </a>
                    <a href="/" className={styles.link}>
                        Terms of Use
                    </a>
                    <div className={styles.para}>Follow Us</div>
                    <div className={styles.social}>
                        <a href="/">
                            <FaFacebook className={styles.icon} />
                        </a>
                        <a href="/">
                            <FaInstagram className={styles.icon} />
                        </a>
                        <a href="/">
                            <FaTwitter className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
