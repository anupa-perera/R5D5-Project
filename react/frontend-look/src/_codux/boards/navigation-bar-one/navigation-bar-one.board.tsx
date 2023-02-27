import { createBoard } from '@wixc3/react-board';
import { NavigationBarOne } from '../../../components/navigation-bar-one/navigation-bar-one';

export default createBoard({
    name: 'NavigationBarOne',
    Board: () => <NavigationBarOne />,
    environmentProps: {
        canvasWidth: 1050,
        canvasHeight: 180,
    },
});
