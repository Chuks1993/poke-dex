import React from 'react';

import "./button.scss";

const Button = ({onClick, title}) => (
    <div className="btn" onClick={onClick}>
        <span className="btn--title">{title}</span>
    </div>
);

export default Button;