import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../components/footer/footer';

export default createBoard({
    name: 'home-pg',
    Board: () => (
        <div>
            <h2 className="topic">
                NBA Clubs
                <b />
            </h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"
                className="image1"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png"
                className="image2"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png"
                className="image3"
            />
            <br />
            <Footer />
        </div>
    ),
    environmentProps: {
        canvasWidth: 1224,
        windowHeight: 613,
        windowWidth: 1370,
    },
});
