import React from 'react'

export default function DiningCard(props) {

    const handleClick = (event) => {
        props.updateCurrentDining(props.dining.id)
        props.displayModal(props.dining.id)
    }

    let iconSrc = ""
    if(props.dining.type === 'Restaurant'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fdinner-table.png?alt=media&token=dd0dde03-6b8f-4eeb-a2e5-b55e65602278"
    } else if(props.dining.type === 'Food Truck'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Ffood-truck.png?alt=media&token=d7728c93-faf6-45af-9796-b311206f0e74"
    } else if(props.dining.type === 'Coffeeshop'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fcoffee.png?alt=media&token=af5b799d-a164-4bc6-acd3-31df7ec34387"
    } else if(props.dining.type === 'Cocktails'){
        iconSrc = "https://firebasestorage.googleapis.com/v0/b/places-app-6f491.appspot.com/o/icons%2Fcocktail.png?alt=media&token=40375880-5769-4ced-9fdf-cceb354bcd49"
    }

    return (
        <div onClick={handleClick} className = 'dining-card'>
            <div className = 'dining-image'>
                <img src={iconSrc} alt="dining" />
            </div>
            <div className = 'dining-info'>
                <h5>{props.dining.title}</h5>
                <p>{props.dining.description}</p>
            </div>

        </div>
    )
}