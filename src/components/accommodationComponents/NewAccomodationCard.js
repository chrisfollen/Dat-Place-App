import React from 'react'

export default function NewAccomodationCard(props) {

    const handleClick = (event) => {
        props.showModal()
    }

    return (
        <div onClick={handleClick} className = 'new-item-card'>
            <h5>➕ Add New Accommodation</h5>
        </div>
    )
}