import React from 'react';

import './card-style.css';

// * Note : This card component will receive single magician info as props

export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.mag.image} alt={props.mag.name} height="200px" width="200px" />
            <h2>{ props.mag.name }</h2>
            <h3>House : {props.mag.house}</h3>
            <h4>Wand : {props.mag.wand.core}</h4>
        </div>
    )
}