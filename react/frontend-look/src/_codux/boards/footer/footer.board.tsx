import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    environmentProps: {
        canvasWidth: 1140,
        canvasHeight: 5,
    },
});
