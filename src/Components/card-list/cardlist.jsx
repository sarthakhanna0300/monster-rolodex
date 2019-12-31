import React from 'react';
import './cardliststyle.css';
import { Card } from '../card.component/card.component';
    export const CardList = props => (
 <div className='card-list'>
     {props.monsters.map(monsters => (
    <Card key={monsters.id} monsters={monsters} />
        ))}
        </div>
    );