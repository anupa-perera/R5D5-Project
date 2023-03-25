import React from "react"

export default function Card(props) {
    return (
        <div className="card">
                <h2 className='name'>{props.name}</h2>
                <img src={`./Logos/${props.Logo}`} className="card--image" alt={props.name + ' Logo'} />
                  <h3 >{props.arena}</h3>
            <h4 className="card--title">{props.location}</h4>
        </div>
    )
}