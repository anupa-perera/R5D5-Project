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
export const NavigationBarOne = ({ className, children = 'NavigationBarOne' }: NavigationBarOneProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
