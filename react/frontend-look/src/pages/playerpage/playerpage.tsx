import React from 'react';

export interface PlayerpageProps {
    className?: string;
}

export const Playerpage: React.FC<PlayerpageProps> = ({ className = '' }) => (
    <div className={className}>Playerpage
    <br/>This page will showcase onece the user click on a player and his attributes and stats will display including a palyer value prediction button.
    </div>
);