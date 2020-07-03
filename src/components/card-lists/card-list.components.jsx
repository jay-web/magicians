import React from 'react';

import { Card } from '../cards/card.component';

import './card-list.styles.css';

// * NOTE : This cardlist component will receive list of magicians as a props

export const CardList = (props) => {

    return (
        // <div className="card-list">{props.children}</div>
        <div className="card-list">
              {
                    props.magicians.map((mag, index) => {
                        return <Card key={index} mag={mag} />                     // ! mag here is single magician info object
                    })
              }

        </div>
    );
}