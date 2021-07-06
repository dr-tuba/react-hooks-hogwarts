import React from 'react'
import { useState } from 'react';

const HogCard = (props) => {
    const [seeDetails, setSeeDetails] = useState(false)
    
    function showDetails(e) {
        setSeeDetails(!seeDetails)
    }
    
    return (
        <div key={props.name} onClick={showDetails} className='card'>
            <div className='content'>
                <h1 className='header'>{props.name}</h1>
                <img className='ui image' src={props.img} alt={props.name}></img>
                <div style={seeDetails ? { display: 'block' } : { display: 'none' }} className='extra content'>
                    <h4>{props.medal.toUpperCase()} MEDAL WINNER</h4>
                    <p>Specialty: {props.specialty}</p>
                    <p> Weight: {props.weight}lbs</p>
                    <p>{props.greased ? 'Greasy-boi' : 'Clean-boi'}</p>
                </div>
            </div>
        </div>
    )
}

export default HogCard
