import React from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="card__image" src={`https://robohash.org/${props.username}?set=set4&size=300x300`}></img>
            <div>
            <h2>{props.name}</h2>
            <p id="contact">{props.email}</p>
            </div>
        </div>
    )
}
export default Card;