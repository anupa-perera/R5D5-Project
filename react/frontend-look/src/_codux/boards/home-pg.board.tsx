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
            <h2 className="pop-players">
                Most Populer Players
                <br />
            </h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg"
                className="home-players"
            />
            <img
                src="https://cdn.britannica.com/88/181288-050-212FB60C/Kevin-Durant-NBA.jpg"
                className="home-players"
            />
            <img
                src="https://staticc.sportskeeda.com/editor/2023/02/516ea-16764363358993-1920.jpg"
                className="home-players"
            />
            <br />
            <img
                src="https://www.sportsnet.ca/wp-content/uploads/2022/04/lakers-westbrook-1040x572.jpg"
                className="home-players"
            />
            <img
                src="https://cdn.britannica.com/88/163888-050-D9D34015/Dwyane-Wade-NBA-Miami-Heat.jpg"
                className="home-players"
            />
            <img
                src="https://ca-times.brightspotcdn.com/dims4/default/b6c85ed/2147483647/strip/false/crop/3840x2160+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F72%2Ff8%2F1aa9f1be432086e01741fdd93230%2Fnets-basketball-11370.jpg"
                className="home-players"
            />
            <Footer className="footer" />
        </div>
    ),
    environmentProps: {
        canvasWidth: 1224,
        windowHeight: 573,
        windowWidth: 1370,
        canvasHeight: 1486,
    },
});
