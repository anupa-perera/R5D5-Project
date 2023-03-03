import React from 'react';

export interface PlayerValuePredictionPageProps {
    className?: string;
}

export const PlayerValuePredictionPage: React.FC<PlayerValuePredictionPageProps> = ({ className = '' }) => (
    <div className={className}>PlayerValuePredictionPage
    <br/>"Once player value prediction button is clicked this page comes and showcase the predicted value including a compare button to compare players value with another player."
    </div>
);