import { createBoard } from '@wixc3/react-board';
import { Playerpage } from '../../../pages/playerpage/playerpage';

export default createBoard({
    name: 'Playerpage',
    Board: () => <Playerpage />
});
