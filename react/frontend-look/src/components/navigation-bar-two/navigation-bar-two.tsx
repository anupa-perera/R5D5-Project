import styles from './navigation-bar-two.module.scss';
import classNames from 'classnames';

export interface NavigationBarTwoProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-navigation-bar-twos-and-templates
 */
export const NavigationBarTwo = ({ className, children = 'NavigationBarTwo' }: NavigationBarTwoProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
