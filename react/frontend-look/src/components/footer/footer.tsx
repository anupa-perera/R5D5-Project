import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
    children?: React.ReactNode;
}

export const Footer = ({ className, children = 'Footer' }: FooterProps) => {
    return (
        <footer className={styles['site-footer']}>
            <div className={styles.content}>
                <div>
                    <div className="col-sm-12 col-md-6">
                        <h5>About</h5>
                        <p className="text-justify">
                            <i>The NBA Player Salary Prediction System</i> is a machine learning
                            project designed by group of second-year computer science undergraduates
                            studying at IIT Sri Lanka. The goal of the project is to develop a web
                            application that predicts the salary of NBA players based on various
                            factors, such as performance statistics, experience and team.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Players</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Clubs</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2023 All Rights Reserved by
                            <a href="#">R5D5 Team</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
