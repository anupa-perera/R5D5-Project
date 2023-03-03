import React from 'react';

export interface PlayerValuePredictionPageProps {
    className?: string;
}

export const PlayerValuePredictionPage: React.FC<PlayerValuePredictionPageProps> = ({ className = '' }) => (
    <div className={className}>PlayerValuePredictionPage</div>
);