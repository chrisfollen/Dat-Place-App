import React from 'react'
import AccomodationCard from './AccomodationCard'
import NewAccomodationCard from './NewAccomodationCard'

export default function AccomodationList(props) {

    const displayAccomodations = () => props.accomodations.map(accomodation => {
        return <AccomodationCard key={accomodation.id} accomodation={accomodation} 
        updateCurrentAccomodation={props.updateCurrentAccomodation} 
        currentAccomodationId={props.currentAccomodationId}
        displayModal={props.displayModal}/>
    })

    return (
        <div className='accomodation-list'>
            {displayAccomodations()}
            <NewAccomodationCard showModal={props.showModal}/>
        </div>
    )
}
