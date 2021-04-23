import React from 'react'

export default function DisplayActivityModal(props) {

    const goBack = () => {
        props.hideModal()
    }

    const handleDelete = () => {
        props.hideModal()
        props.deleteActivity()
    }

    return (
        <div className = 'info-modal-content'>
            <h2>{props.activity.title}</h2>
            <h3>Destination: {props.activity.destination}</h3>
            <h3>Type: {props.activity.type}</h3>
            { props.activity.coordinates ? <h3>Coordinates: {props.activity.coordinates}</h3> : null }
            { props.activity.link ? <h3>Link: <a className = 'link' href={props.activity.link} target="_blank" rel="noreferrer">{props.activity.link}</a></h3> : null }
            <h3>Notes: {props.activity.description}</h3>
            <button className = 'info-modal-button' onClick={goBack}>Back to Results</button>
            <button className = 'info-modal-delete-button' onClick={handleDelete}>Delete</button>
        </div>
    )
}