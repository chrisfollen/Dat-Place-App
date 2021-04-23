import './styles/meyer.css'
import './styles/App.css';
import './styles/destinations.css'
import './styles/accommodations.css'
import './styles/activities.css'
import './styles/dining.css'
import './styles/displayModal.css'
import './styles/formModal.css'

import React, { Component } from 'react'
import Header from './components/Header'
import DestinationList from './components/destinationComponents/DestinationList'
import AccomodationList from './components/accommodationComponents/AccomodationList'
import ActivityList from './components/activityComponents/ActivityList'
import DiningList from './components/diningComponents/DiningList'
import NewAccomodationModal from './components/accommodationComponents/NewAccomodationModal'
import NewDestinationModal from './components/destinationComponents/NewDestinationModal'
import NewActivityModal from './components/activityComponents/NewActivityModal'
import NewDiningModal from './components/diningComponents/NewDiningModal.js'
import DisplayAccomodationModal from './components/accommodationComponents/DisplayAccomodationModal';
import DisplayActivityModal from './components/activityComponents/DisplayActivityModal'
import DisplayDiningModal from './components/diningComponents/DisplayDiningModal'

const destinationsURL = 'http://localhost:3000/destinations/'
const accomodationsURL = 'http://localhost:3000/accomodations/'
const activitiesURL = 'http://localhost:3000/activities/'
const diningURL = 'http://localhost:3000/dining/'


export default class App extends Component {


  state = {
    destinations: [],
    nextDestinationId: 0,
    accomodations: [],
    nextAccomodationId: 0,
    activities: [],
    nextActivityId: 0,
    dining: [],
    nextDiningId: 0,
    currentDestinationId: 0,
    currentAccomodationId: 1,
    currentActivityId: 1,
    currentDiningId: 1,
    checkAddAccomodationModal: 0,
    checkAddDestinationModal: 0,
    checkAddActivityModal: 0,
    checkAddDiningModal: 0,
    checkDisplayAccomodationModal: 0,
    checkDisplayActivityModal: 0,
    checkDisplayDiningModal: 0

  }

  componentDidMount(){
    fetch(destinationsURL)
      .then(response => response.json())
      .then(destinations => this.setState({
        destinations: destinations,
        nextDestinationId: destinations[destinations.length - 1].id + 1,
      }))
    
    fetch(accomodationsURL)
    .then(response => response.json())
    .then(accomodations => this.setState({
      accomodations: accomodations,
      nextAccomodationId: accomodations[accomodations.length - 1].id + 1,
    }))

    fetch(activitiesURL)
    .then(response => response.json())
    .then(activities => this.setState({
      activities: activities,
      nextActivityId: activities[activities.length - 1].id + 1,
    }))

    fetch(diningURL)
    .then(response => response.json())
    .then(dining => this.setState({
      dining: dining,
      nextDiningId: dining[dining.length - 1].id + 1,
    }))
  }

  updateCurrentDestination = (id) => {
    this.setState({
      currentDestinationId: id
    })
  }

  updateCurrentAccomodation = (id) => {
    this.setState({
      currentAccomodationId: id
    })
  }

  findCurrentAccomodation = () => {
    const currentAccom = this.state.accomodations.find(accom => accom.id === this.state.currentAccomodationId)
    return currentAccom
  }

  updateCurrentActivity = (id) => {
    this.setState({
      currentActivityId: id
    })
  }

  findCurrentActivity = () => {
    const currentAct = this.state.activities.find(act => act.id === this.state.currentActivityId)
    return currentAct
  }

  updateCurrentDining = (id) => {
    this.setState({
      currentDiningId: id
    })
  }

  findCurrentDining = () => {
    const currentDine = this.state.dining.find(dine => dine.id === this.state.currentDiningId)
    return currentDine
  }


  filterAccomodations = () => {
    if(this.state.currentDestinationId !==0){
      const thisDestination = this.state.destinations.find(place => place.id === this.state.currentDestinationId)
      return this.state.accomodations.filter(accom => accom.destination === thisDestination.title)
    } else {
      return this.state.accomodations
    }
  }

  filterActivities = () => {
    if(this.state.currentDestinationId !==0){
      const thisDestination = this.state.destinations.find(place => place.id === this.state.currentDestinationId)
      return this.state.activities.filter(act => act.destination === thisDestination.title)
    } else {
      return this.state.activities
    }
  }

  filterDining = () => {
    if(this.state.currentDestinationId !==0){
      const thisDestination = this.state.destinations.find(place => place.id === this.state.currentDestinationId)
      return this.state.dining.filter(dine => dine.destination === thisDestination.title)
    } else {
      return this.state.dining
    }
  }

  addAccomodation = (accomodation) => {
    const newAccomodations = [...this.state.accomodations, accomodation]
    const newNextAccomodationId = this.state.nextAccomodationId + 1
    this.setState({
      accomodations: newAccomodations,
      nextAccomodationId: newNextAccomodationId
    })

    fetch(accomodationsURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newNextAccomodationId, ...accomodation})
    })
  }

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

  addActivity = (activity) => {
    const newActivities = [...this.state.activities, activity]
    const newNextActivityId = this.state.nextActivityId + 1
    this.setState({
      activities: newActivities,
      nextActivityId: newNextActivityId
    })

    fetch(activitiesURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newNextActivityId, ...activity})
    })
  }

  addDining = (dining) => {
    const newDining = [...this.state.dining, dining]
    const newNextDiningId = this.state.nextDiningId + 1
    this.setState({
      dining: newDining,
      nextDiningId: newNextDiningId
    })

    fetch(diningURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newNextDiningId, ...dining})
    })
  }

  deleteActivity = () => {
    const confirmDelete = window.confirm('Delete This Activity?')

    if(confirmDelete) {
      const act = this.findCurrentActivity()
      this.updateCurrentActivity(1)
      this.setState({
        activities: this.state.activities.filter(activity => activity !== act)
      })
  
      fetch((activitiesURL + act.id), {
        method: "DELETE"
      })
    }
  }

  deleteAccomodation = () => {
    const confirmDelete = window.confirm('Delete This Accomodation?')

    if(confirmDelete) {
      const accom = this.findCurrentAccomodation()
      this.updateCurrentAccomodation(1)
      this.setState({
        accomodations: this.state.accomodations.filter(accomodation => accomodation !== accom)
      })
  
      fetch((accomodationsURL + accom.id), {
        method: "DELETE"
      })
    }
  }

  deleteDining = () => {
    const confirmDelete = window.confirm('Delete This Food + Drink Option?')

    if(confirmDelete) {
      const dine = this.findCurrentDining()
      this.updateCurrentDining(1)
      this.setState({
        dining: this.state.dining.filter(diner => diner !== dine)
      })
  
      fetch((diningURL + dine.id), {
        method: "DELETE"
      })
    }
  }
  

  showAddAccomodationModal = () => {
    this.setState({
      checkAddAccomodationModal: 1
    })
  }

  hideAddAccomodationModal = () => {
    this.setState({
      checkAddAccomodationModal: 0
    })
  }

  showAddDestinationModal = () => {
    this.setState({
      checkAddDestinationModal: 1
    })
  }

  hideAddDestinationModal = () => {
    this.setState({
      checkAddDestinationModal: 0
    })
  }

  showAddActivityModal = () => {
    this.setState({
      checkAddActivityModal: 1
    })
  }

  hideAddActivityModal = () => {
    this.setState({
      checkAddActivityModal: 0
    })
  }

  showAddDiningModal = () => {
    this.setState({
      checkAddDiningModal: 1
    })
  }

  hideAddDiningModal = () => {
    this.setState({
      checkAddDiningModal: 0
    })
  }

  checkShowModal = (number) => {
    if(number === 1){
      return 'add-form-modal'
    } else {
      return 'add-form-modal-hidden'
    }
  }



  showDisplayAccomodationModal = () => {
    this.setState({
      checkDisplayAccomodationModal: 1
    })
  }

  hideDisplayAccomodationModal = () => {
    this.setState({
      checkDisplayAccomodationModal: 0
    })
  }

  showDisplayActivityModal = () => {
    this.setState({
      checkDisplayActivityModal: 1
    })
  }

  hideDisplayActivityModal = () => {
    this.setState({
      checkDisplayActivityModal: 0
    })
  }

  showDisplayDiningModal = () => {
    this.setState({
      checkDisplayDiningModal: 1
    })
  }

  hideDisplayDiningModal = () => {
    this.setState({
      checkDisplayDiningModal: 0
    })
  }


  checkDisplayModal = (number) => {
    if(number === 1){
      return 'add-form-modal'
    } else {
      return 'add-form-modal-hidden'
    }
  }


  render() {
    return (
      <>
        <Header />
        <div className = 'app'>
          {/* <br />​<hr />​​​​​​​​​​​​​​​​​​​<br /> */}
          <div className='destinations-container'>
            <h2>DESTINATIONS</h2>
            <DestinationList destinations={this.state.destinations} updateCurrentDestination={this.updateCurrentDestination} currentDestinationId={this.state.currentDestinationId} showModal={this.showAddDestinationModal}/>
          </div>
          <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
          <div className='accomodations-container'>
            <h3>ACCOMMODATIONS</h3>
            <AccomodationList accomodations={this.filterAccomodations()} updateCurrentAccomodation={this.updateCurrentAccomodation} currentAccomodationId={this.state.currentAccomodationId} showModal={this.showAddAccomodationModal} displayModal={this.showDisplayAccomodationModal}/>
          </div>
          <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
          <div className='activity-container'>
            <h3>ACTIVITIES</h3>
            <ActivityList activities={this.filterActivities()} updateCurrentActivity={this.updateCurrentActivity} currentActivityId={this.state.currentActivityId} showModal={this.showAddActivityModal} displayModal={this.showDisplayActivityModal}/>
          </div>
          <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
          <div className='dining-container'>
            <h3>FOOD + DRINK</h3>
            <DiningList dining={this.filterDining()} updateCurrentDining={this.updateCurrentDining} currentDiningId={this.state.currentDiningId} showModal={this.showAddDiningModal} displayModal={this.showDisplayDiningModal}/>
          </div>
          <div className={this.checkShowModal(this.state.checkAddAccomodationModal)}>
            <NewAccomodationModal addAccomodation={this.addAccomodation} hideModal={this.hideAddAccomodationModal} nextId={this.state.nextAccomodationId} destinations={this.state.destinations}/>
          </div>
          <div className={this.checkShowModal(this.state.checkAddDestinationModal)}>
            <NewDestinationModal addDestination={this.addDestination} hideModal={this.hideAddDestinationModal} nextId={this.state.nextDestinationId}/>
          </div>
          <div className={this.checkShowModal(this.state.checkAddActivityModal)}>
            <NewActivityModal addActivity={this.addActivity} hideModal={this.hideAddActivityModal} nextId={this.state.nextActivityId} destinations={this.state.destinations}/>
          </div>
          <div className={this.checkShowModal(this.state.checkAddDiningModal)}>
            <NewDiningModal addDining={this.addDining} hideModal={this.hideAddDiningModal} nextId={this.state.nextDiningId} destinations={this.state.destinations}/>
          </div>
          <div className={this.checkDisplayModal(this.state.checkDisplayAccomodationModal)}>
            {this.state.accomodations.length > 1 ? <DisplayAccomodationModal accomodation={this.findCurrentAccomodation()} hideModal={this.hideDisplayAccomodationModal} deleteAccomodation={this.deleteAccomodation}/> : null }
          </div>
          <div className={this.checkDisplayModal(this.state.checkDisplayActivityModal)}>
            {this.state.activities.length > 1 ? <DisplayActivityModal activity={this.findCurrentActivity()} hideModal={this.hideDisplayActivityModal} deleteActivity={this.deleteActivity}/> : null }
          </div>
          <div className={this.checkDisplayModal(this.state.checkDisplayDiningModal)}>
            {this.state.dining.length > 1 ? <DisplayDiningModal dining={this.findCurrentDining()} hideModal={this.hideDisplayDiningModal} deleteDining={this.deleteDining}/> : null }
          </div>
        </div>
      </>
    )
  }
}

