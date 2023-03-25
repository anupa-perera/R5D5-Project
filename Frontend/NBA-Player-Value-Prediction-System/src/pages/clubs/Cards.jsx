import React from "react"

export default function Card(props) {
    return (
        <div className="card">
                <h1 className='name'>{props.TeamName}</h1>
                  <h2 >{props.arena}</h2>
            <p className="card--title">{props.location}</p>
        </div>
    )
}