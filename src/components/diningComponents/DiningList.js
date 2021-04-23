import React from 'react'
import DiningCard from './DiningCard'
import NewDiningCard from './NewDiningCard'

export default function DiningList(props) {

    const displayDining = () => props.dining.map(dine => {
        return <DiningCard key={dine.id} dining={dine} 
        updateCurrentDining={props.updateCurrentDining} 
        currentDiningId={props.currentDiningId}
        displayModal={props.displayModal}/>
    })

    return (
        <div className='dining-list'>
            {displayDining()}
            <NewDiningCard showModal={props.showModal}/>
        </div>
    )
}