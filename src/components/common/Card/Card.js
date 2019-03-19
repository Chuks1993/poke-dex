import React from 'react';

import "./card.scss";

const Card = ({ name, onClick, spriteURL }) => (
    <div href="#popup" onClick={onClick}>
        <div className="card">
            <div className="card__side card__side--front">
                <img alt="sprite" src={spriteURL} />
                <span>{name}</span>
            </div>
            <div className="card__side card__side--back">
                Back
            </div>
        </div>
    </div>
);

export default Card;