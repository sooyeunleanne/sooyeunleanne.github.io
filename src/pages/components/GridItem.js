import React from 'react';
import './GridItem.css';

export default function GridItem(props) {
    const name = props.name;
    const role = props.role;
    const month = props.month;
    const startYear = props.startYear;
    const endYear = props.endYear;
    const image = props.image;
    
    return (
    <div className="grid-item">
        <div>
            <img src={props.image} height="25vw"/>
        </div>
        { props.name }
        <div className = "role">
            <b>{props.role}</b>
            <div className = "years">
                {props.startYear} - {props.endYear}   
            </div>
        </div>
        <div className="break"></div>
        <button className="pop-up-button" onClick={() => props.setTrigger(true)}>Open</button>
    </div>
    );
}