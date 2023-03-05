import { createBoard } from '@wixc3/react-board';
import { Club } from '../../../pages/club/club';

export default createBoard({
    name: 'Club',
    Board: () => <Club />,
    environmentProps: {
        canvasWidth: 1184,
        canvasHeight: 677,
    },
});