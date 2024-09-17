import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
    
        {props.major && <p className="timeline__text">{props.major}</p>}
        {props.grade && <p className="timeline__text">{props.grade}</p>}
        {props.duration && <p className="timeline__text">{props.duration}</p>}
        {props.role && <p className="timeline__text">{props.role}</p>}
        {props.institution && <p className="timeline__text">{props.institution}</p>}
        {props.location && <p className="timeline__text">{props.location}</p>}
        <br/>
        {props.desc && <p className="timeline__text">{props.desc}</p>}


    </div>
  )
}

export default Card
