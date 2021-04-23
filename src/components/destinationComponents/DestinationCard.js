import React from 'react'

export default function DestinationCard(props) {

    const handleClick = (event) => {
        props.updateCurrentDestination(props.destination.id)
    }

    let thisClass = 'destination-card'
    if(props.currentDestinationId !== 0 && props.currentDestinationId !== props.destination.id){
        thisClass = 'destination-card-grey'
    }

    return (
        <div onClick={handleClick} className = {thisClass} style={{backgroundImage: `url(${props.destination.image_url})`,
        backgroundposition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <h4>{props.destination.title}</h4>
        </div>
    )
}
