import styles from './meetthe-team.module.scss';
import classNames from 'classnames';

export interface MeettheTeamProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-meetthe-teams-and-templates
 */
export const MeettheTeam = ({ className, children = 'MeettheTeam' }: MeettheTeamProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            <div className={styles.midsection}>
                <div className={styles.member} />
                <div className={styles.member} />
                <div className={styles.member} />
                <div className={styles.member} />
                <div className={styles.member}></div>This is the team of contributors
            </div>
        </div>
    );
};
