import styles from './clubpage.module.scss';
import classNames from 'classnames';

export interface ClubpageProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-clubpages-and-templates
 */
export const Clubpage = ({ className, children = 'Clubpage' }: ClubpageProps) => {
    return (<div className={classNames(styles.container, className)}>
                
            </div>);
};
