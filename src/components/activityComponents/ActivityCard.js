import React from 'react'

export default function ActivityCard(props) {

    const handleClick = (event) => {
        props.updateCurrentActivity(props.activity.id)
        props.displayModal(props.activity.id)
    }

    let iconSrc = ""
    if(props.activity.type === 'Offroading'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fjeep.png?alt=media&token=34ecfc42-4ce2-418e-b8bf-09efaa862d90"
    } else if(props.activity.type === 'Hiking'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fhiking.png?alt=media&token=f71a3384-45c9-4c0b-8083-e478efb3b43e"
    } else if(props.activity.type === 'Shopping'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fshop.png?alt=media&token=d9af28ae-f73c-4e4a-be59-51da2ff5a7b2"
    } else if(props.activity.type === 'Boating'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fboat.png?alt=media&token=9ce246d8-8685-466d-af2a-74101dac031d"
    } else if(props.activity.type === 'Surfing'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fsurfboard.png?alt=media&token=80cc1e04-6ede-436c-bc79-0f79b2a1f4a1"
    } else if(props.activity.type === 'Relaxing'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fsunrise.png?alt=media&token=b2501210-42c1-40a3-b323-307ffbee648b"
    } else if(props.activity.type === 'Other'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fother.png?alt=media&token=6a817287-d5e8-4200-b760-33832f60c52e"
    } else if(props.activity.type === 'Biking'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fbicycle.png?alt=media&token=d01726b1-ccc3-4411-98ef-de6dd2bb2bde"
    }

    return (
        <div onClick={handleClick} className = 'activity-card'>
            <div className = 'activity-image'>
                <img src={iconSrc} alt="activity" />
            </div>
            <div className = 'activity-info'>
                <h5>{props.activity.title}</h5>
                <p>{props.activity.description}</p>
            </div>

        </div>
    )
}