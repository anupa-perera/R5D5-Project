import { createBoard } from '@wixc3/react-board';
import { PlayerValuePredictionPage } from '../../../pages/player-value-prediction-page/player-value-prediction-page';

export default createBoard({
    name: 'PlayerValuePredictionPage',
    Board: () => <PlayerValuePredictionPage />
});
