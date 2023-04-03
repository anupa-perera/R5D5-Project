import React from "react"

export default function Carousel(props) {
    return (
        <div class="carousel">
            <div class="tiles-wrapper">
                <div className='i-tile'>
                    <a href={props.link} target='_blank'>
                    <img src={`./logos/${props.logo}`} className="i-image" />
                        <div class="tile">{props.title}</div></a>
                </div>
            </div>
        </div>
    )
}