import { createBoard } from '@wixc3/react-board';
import { NavigationBarTwo } from '../../../components/navigation-bar-two/navigation-bar-two';

export default createBoard({
    name: 'NavigationBarTwo',
    Board: () => <NavigationBarTwo />
});
