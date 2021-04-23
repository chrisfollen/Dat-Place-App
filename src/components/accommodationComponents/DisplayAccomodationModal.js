import React from 'react'

export default function DisplayAccomodationModal(props) {

    const goBack = () => {
        props.hideModal()
    }

    const handleDelete = () => {
        props.hideModal()
        props.deleteAccomodation()
    }

    return (
        <div className = 'info-modal-content'>
            <h2>{props.accomodation.title}</h2>
            <h3>Destination: {props.accomodation.destination}</h3>
            <h3>Type: {props.accomodation.type}</h3>
            { props.accomodation.coordinates ? <h3>Coordinates: {props.accomodation.coordinates}</h3> : null }
            { props.accomodation.link ? <h3>Link: <a className = 'link' href={props.accomodation.link} target="_blank" rel="noreferrer">{props.accomodation.link}</a></h3> : null }
            <h3>Notes: {props.accomodation.description}</h3>
            <button className = 'info-modal-button' onClick={goBack}>Back to Results</button>
            <button className = 'info-modal-delete-button' onClick={handleDelete}>Delete</button>
        </div>
    )
}
