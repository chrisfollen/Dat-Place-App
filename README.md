# Dat Place
-> Your virtual travel assistant <-


## Table of Contents
- [General Info](#general-info)
- [Intro Video](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Code Example](#code-example)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)


## General Info
Dat Place is a web-based travel app that allows a user to filter recommendations based on the destination.


## Intro Video
[Dat Place](https://youtu.be/Bqc3w53eidw)


# Technologies 
- React
- HTML
- CSS


## Setup 
To run Dat Place, fork and clone this GitHub repository. Then run:

json-server --watch db.json 

npm start


## Code Example

```jsx
  //adds a new destination to both frontend and backend
  addDestination = (destination) => {
    const newDestinations = [...this.state.destinations, destination]
    const newNextDestinationId = this.state.nextDestinationId + 1
    this.setState({
      destinations: newDestinations,
      nextDestinationId: newNextDestinationId
    })

    fetch(destinationsURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newNextDestinationId, ...destination})
    })
  }

  }
```

## Features
- Shows accomodations, activities, and food & drink options for a variety of destinations
- Allows a user to click on a destinations card, and sort recmommendations by the selected destination
- Each recommendation is clickable, and brings up a modal with more information  when clicked
- The user can add a destination, or add or delete a recommendation at any time
- All changes persist when the app reloads



## Status
This project is currently finished. I may introduce new features or refactor existing code going forward.


## Inspiration
I built Dat Place because I like to travel, and friends are often asking me for recommendations for restaurants, camping, etc. in different places.  This app allows me to keep track of where I've been and places I'd like to return to.


## Contact
Jeopard(ish)! was created by [Chris Follen](https://www.linkedin.com/in/chrisfollen/)

Feel free to reach out!