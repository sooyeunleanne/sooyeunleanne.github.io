import React from 'react';
import { useState, useCallback } from "react";
import './Popup.css';

export default function PopupExperiences(props) {
    const onGithubClick = useCallback(() => {
        window.open(props.githublink);
      }, []);

    return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <div>
            <img src={props.image} width = "40%" style={{paddingBottom: "13m"}}/>
            </div>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
                X</button>
            { props.name }
            <br/>
            <b className="role" style={{fontSize: "1.5em"}}> { props.role } </b>
            <p>
                { props.startYear } - {props.endYear}
            </p>
            <ul className="description" style={{textAlign: "left"}}>
                <li>{ props.description[0] }</li>
                <li>{ props.description[1] }</li>
                <li>{ props.description[2] }</li>
            </ul>
        </div>
        </div>
    ) : "";
}