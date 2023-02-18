import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className, children = 'Footer' }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <hr/>
            <div className={styles.content}>
                <p>NBA Player Value Prediction System</p>
            </div>
        </footer>
    );
};
