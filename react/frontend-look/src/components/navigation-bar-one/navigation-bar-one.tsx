import {Link} from 'react-router-dom';
import styles from './navigation-bar-one.module.scss';
import classNames from 'classnames';

export interface NavigationBarOneProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-navigation-bar-ones-and-templates
 */
export const NavigationBarOne = ({
    className,
    children = 'NavigationBarOne',
}: NavigationBarOneProps) => {
    return (
        <nav className={classNames(className, styles.nav)}>
            <ul className={styles['navigation-menu']}>
                <li className={styles['navigation-item-left']}>
                    <Link to="/" className={styles['navigation-link']}>
                        Home
                    </Link>
                </li>
                <li className={styles['navigation-item-left']}>
                    <Link to="/about" className={styles['navigation-link']}>
                        About
                    </Link>
                </li>
                <li className={styles['navigation-item-right']}>
                    <form className={styles['navigation-search-form']}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={styles['navigation-search-input']}
                        />
                        <button type="submit" className={styles['navigation-search-button']}>
                            <i>Search</i>
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    );
};
