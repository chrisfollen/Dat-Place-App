import React from 'react'

export default function AccomodationCard(props) {

    const handleClick = (event) => {
        props.updateCurrentAccomodation(props.accomodation.id)
        props.displayModal(props.accomodation.id)
    }

    let iconSrc = ""
    if(props.accomodation.type === 'Camping'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Ftent.png?alt=media&token=db027784-c1d8-4a6b-8649-60c758e3c15e"
    } else if(props.accomodation.type === 'Hotel'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fhotel.png?alt=media&token=fca60eba-3882-426f-a7bb-9d1aa4f0d420"
    } else if(props.accomodation.type === 'Airbnb'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fairbnb.png?alt=media&token=1cc1c2b5-6ef3-473f-9e10-8843e389e3da"
    }

    return (
        <div onClick={handleClick} className = 'accomodation-card'>
            <div className = 'accomodation-image'>
                <img src={iconSrc} alt="accomodation" />
            </div>
            <div className = 'accomodation-info'>
                <h5>{props.accomodation.title}</h5>
                <p>{props.accomodation.description}</p>
            </div>

        </div>
    )
}