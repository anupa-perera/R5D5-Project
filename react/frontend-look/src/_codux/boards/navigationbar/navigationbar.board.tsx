import { createBoard } from '@wixc3/react-board';
import { Navigationbar } from '../../../components/navigationbar/navigationbar';

export default createBoard({
    name: 'Navigationbar',
    Board: () => <Navigationbar />
});
