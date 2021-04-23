import React from 'react'

export default function AllDestinationsCard(props) {

    const handleClick = (event) => {
        props.updateCurrentDestination(0)
    }

    return (
        <div onClick={handleClick} className = 'new-destination-card'>
            <h4>Back to All Destinations</h4>
        </div>
    )
}