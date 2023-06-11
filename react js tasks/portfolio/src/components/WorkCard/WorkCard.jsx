import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="project-details">
                <p>{props.text}</p>
                <div className="project-btns">
                    <NavLink to={props.viewurl} className="btn" target='_blank'> View </NavLink>
                    <NavLink to={props.sourceurl} className="btn" target='_blank'> Source </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
