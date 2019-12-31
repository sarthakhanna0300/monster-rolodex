import React from 'react';
import './cardstyle.css';

export const Card = props => (
    <div className='card-container'>
       <img alt="monsters" src={`https://robohash.org/${props.monsters.id}?set=set20&size=180x180`}/>
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>

    </div>
);