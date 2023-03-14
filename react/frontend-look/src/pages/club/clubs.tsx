import React, { useEffect, useState } from 'react';
import  styles  from './clubs.module.scss';
import classNames from 'classnames';
import axios from 'axios';

export interface ClubProps {
    className?: string;
    children?:React.ReactNode;
}

export const Club = ({ className, children = 'ClubPage' }: ClubProps) => {

    const [teams, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
          .then((response) => {
            console.log(response);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    return (
        <div className={classNames(styles.container, className)}>
            {teams.map(result =>(
                <div key={result._id} className={styles.tile}>
                    <h3>{result.Team Name}</h3>
                </div>
            ))}
        </div>
    );
};

