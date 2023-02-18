import { createBoard } from '@wixc3/react-board';
import { MeetTheTeam } from '../../../pages/meet-the-team/meet-the-team';

export default createBoard({
    name: 'MeetTheTeam',
    Board: () => <MeetTheTeam />,
    environmentProps: {
        canvasWidth: 1101,
        canvasHeight: 2025,
        windowWidth: 1062,
        windowHeight: 714,
    },
});
