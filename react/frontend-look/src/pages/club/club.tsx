import React from 'react';
import Classnames from 'classnames';
import styles from './club.scss';

export interface ClubProps {
    className?: string;
}

export const Club: React.FC<ClubProps> = ({ className = '' }) => {
    return (
            <div className="container">
                <div className="tile">
                    <h3>Name One</h3>
                </div>
                <div className="tile">
                    <h3>Tile 2</h3>
                </div>
                <div className="tile">
                    <h3>Tile 3</h3>
                </div>
                <div className="tile">
                    <h3>Tile 4</h3>
                </div>
                <div className="tile">
                    <h3>Tile 5</h3>
                </div>
                <div className="tile">
                    <h3>Tile 6</h3>
                </div>
                <div className="tile">
                    <h3>Tile 7</h3>
                </div>
                <div className="tile">
                    <h3>Tile 8</h3>
                </div>
                <div className="tile">
                    <h3>Tile 9</h3>
                </div>
                <div className="tile">
                    <h3>Tile 10</h3>
                </div>
                <div className="tile">
                    <h3>Tile 11</h3>
                </div>
                <div className="tile">
                    <h3>Tile 12</h3>
                </div>
                <div className="tile">
                    <h3>Tile 13</h3>
                </div>
                <div className="tile">
                    <h3>Tile 14</h3>
                </div>
                <div className="tile">
                    <h3>Tile 15</h3>
                </div>
                <div className="tile">
                    <h3>Tile 16</h3>
                </div>
                <div className="tile">
                    <h3>Tile 17</h3>
                </div>
                <div className="tile">
                    <h3>Tile 18</h3>
                </div>
                <div className="tile">
                    <h3>Tile 19</h3>
                </div>
                <div className="tile">
                    <h3>Tile 20</h3>
                </div>
            </div>
    );
};
