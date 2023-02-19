import styles from './meet-the-team.module.scss';
import classNames from 'classnames';
import { Footer } from '../../components/footer/footer';
import sasiru from './images/sasiru-dp.png';
import header from './images/header.jpg';
import malith from './images/Malith.jpg';

export interface MeetTheTeamProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-meet-the-teams-and-templates
 */
export const MeetTheTeam = ({ className, children = 'MeetTheTeam' }: MeetTheTeamProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="all-content">
                <div className={styles.header}>
                    <img
                        src={header}
                        className={styles.meettheteamimage}
                    />
                    <h1 className={styles['header-text']}>Meet the Team</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={styles.area}>
                    <div className={classNames('team', styles.team)}>
                        <div className={classNames('member', styles.member)}>
                            <img src="https://picsum.photos/150/150" alt="Member photo Anupa" />
                            <h3>John Doe</h3>
                            <p>Software Developer</p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={sasiru} alt="Member photo Sasiru" />
                            <h3>Sasiru Vishmika</h3>
                            <p>
                                Software Developer
                                <br />
                                w1899317
                            </p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={malith} alt="Member photo Malith" />
                            <h3>Bob Johnson</h3>
                            <p>Software Developer</p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src="https://picsum.photos/150/150" alt="Member photo Dulara" />
                            <h3>Alice Brown</h3>
                            <p>Software Developer</p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src="https://picsum.photos/150/150" alt="Member photo Mojitha" />
                            <h3>Mike Davis</h3>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
                <div className={styles['after-statement']}>
                    <p className="afterstatement-text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
                            varius felis, quis faucibus dolor hendrerit vel. Pellentesque aliquet
                            elit elit, ut gravida justo rhoncus in.
                        </i>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};
