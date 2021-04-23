import React from 'react'

export default function NewDestinationCard(props) {

    const handleClick = (event) => {
        props.showModal()
    }

    let thisClass = 'new-destination-card'
    if(props.currentDestinationId !== 0){
        thisClass = 'new-destination-card-grey'
    }

    return (
        <div onClick={handleClick} className = {thisClass}>
            <h4>➕ Add New Destination</h4>
        </div>
    )
}