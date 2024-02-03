import classNames from 'classnames';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span>Jurify </span>
            <nav className={styles.nav}>
                <a href="/features" className={styles.active}>
                    Features
                </a>
                <a href="/pricing" className={styles.active}>
                    Pricing
                </a>
                <Dropdown text="Resources" className={styles.active}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="New" />
                        <Dropdown.Item text="Open..." description="ctrl + o" />
                        <Dropdown.Item text="Save as..." description="ctrl + s" />
                        <Dropdown.Item text="Rename" description="ctrl + r" />
                        <Dropdown.Item text="Make a copy" />
                        <Dropdown.Item icon="folder" text="Move to folder" />
                        <Dropdown.Item icon="trash" text="Move to trash" />
                        <Dropdown.Divider />
                        <Dropdown.Item text="Download As..." />
                        <Dropdown.Item text="Publish To Web" />
                        <Dropdown.Item text="E-mail Collaborators" />
                    </Dropdown.Menu>
                </Dropdown>
                <a href="/contact" className={styles.active}>
                    Contact Us
                </a>
            </nav>
            <div className={styles.buttondiv}>
                <Button primary>Login </Button>
                <Button primary>Try for free </Button>
            </div>
        </div>
    );
};
