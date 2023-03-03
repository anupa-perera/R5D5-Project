import React from 'react';

export interface PlayerpageProps {
    className?: string;
}

export const Playerpage: React.FC<PlayerpageProps> = ({ className = '' }) => (
    <div className={className}>Playerpage</div>
);