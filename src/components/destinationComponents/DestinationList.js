import React from 'react'
import DestinationCard from './DestinationCard'
import NewDestinationCard from './NewDestinationCard'
import AllDestinationsCard from './AllDestinationsCard'

export default function DestinationList(props) {

    const displayDestinations = () => props.destinations.map(destination => {
        return <DestinationCard key={destination.id} destination={destination} 
        updateCurrentDestination={props.updateCurrentDestination} 
        currentDestinationId={props.currentDestinationId}/>
    })

    return (
        <div className='destination-list'>
            {displayDestinations()}
            <NewDestinationCard currentDestinationId={props.currentDestinationId} showModal={props.showModal}/>
            { props.currentDestinationId !== 0 ? <AllDestinationsCard currentDestinationId={props.currentDestinationId} updateCurrentDestination={props.updateCurrentDestination}/> : null }
        </div>
    )
}
