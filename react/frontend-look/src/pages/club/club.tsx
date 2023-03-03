import React from 'react';

export interface ClubProps {
    className?: string;
}

export const Club: React.FC<ClubProps> = ({ className = '' }) => (
    <div className={className}>Club</div>
);