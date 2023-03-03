import { createBoard } from '@wixc3/react-board';
import { Clubpage } from '../../../pages/clubpage/clubpage';

export default createBoard({
    name: 'Clubpage',
    Board: () => <Clubpage />
});
