import styles from './navigationbar.module.scss';
import classNames from 'classnames';

export interface NavigationbarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-navigationbars-and-templates
 */
export const Navigationbar = ({ className, children = 'Navigationbar' }: NavigationbarProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
