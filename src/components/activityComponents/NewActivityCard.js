import React from 'react'

export default function NewActivityCard(props) {

    const handleClick = (event) => {
        props.showModal()
    }

    return (
        <div onClick={handleClick} className = 'new-item-card'>
            <h5>➕ Add New Activity</h5>
        </div>
    )
}