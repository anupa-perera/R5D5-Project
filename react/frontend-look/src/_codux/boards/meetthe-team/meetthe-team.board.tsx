import { createBoard } from '@wixc3/react-board';
import { MeettheTeam } from '../../../components/meetthe-team/meetthe-team';

export default createBoard({
    name: 'MeettheTeam',
    Board: () => <MeettheTeam />,
    environmentProps: {
        canvasHeight: 299,
    },
});
