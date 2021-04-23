import React from 'react'

export default function DisplayDiningModal(props) {

    const goBack = () => {
        props.hideModal()
    }

    const handleDelete = () => {
        props.hideModal()
        props.deleteDining()
    }

    return (
        <div className = 'info-modal-content'>
            <h2>{props.dining.title}</h2>
            <h3>Destination: {props.dining.destination}</h3>
            <h3>Type: {props.dining.type}</h3>
            { props.dining.coordinates ? <h3>Coordinates: {props.dining.coordinates}</h3> : null }
            { props.dining.link ? <h3>Link: <a className = 'link' href={props.dining.link} target="_blank" rel="noreferrer">{props.dining.link}</a></h3> : null }
            <h3>Notes: {props.dining.description}</h3>
            <button className = 'info-modal-button' onClick={goBack}>Back to Results</button>
            <button className = 'info-modal-delete-button' onClick={handleDelete}>Delete</button>
        </div>
    )
}