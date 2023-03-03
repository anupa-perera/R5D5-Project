import React from 'react';

export interface ClubProps {
    className?: string;
}

export const Club: React.FC<ClubProps> = ({ className = '' }) => (
    <div className={className}>Club
    <br/> This page will discribe the club and then show all the players in the club using tiles
    </div>
);