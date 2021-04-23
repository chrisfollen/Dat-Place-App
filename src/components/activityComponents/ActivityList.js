import React from 'react'
import ActivityCard from './ActivityCard'
import NewActivityCard from './NewActivityCard'

export default function ActivityList(props) {

    const displayActivities = () => props.activities.map(activity => {
        return <ActivityCard key={activity.id} activity={activity} 
        updateCurrentActivity={props.updateCurrentActivity} 
        currentActivityId={props.currentActivityId}
        displayModal={props.displayModal}/>
    })

    return (
        <div className='activity-list'>
            {displayActivities()}
            <NewActivityCard showModal={props.showModal}/>
        </div>
    )
}