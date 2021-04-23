import React from 'react'

export default function NewDiningCard(props) {

    const handleClick = (event) => {
        props.showModal()
    }

    return (
        <div onClick={handleClick} className = 'new-item-card'>
            <h5>➕ Add New Food + Drink</h5>
        </div>
    )
}