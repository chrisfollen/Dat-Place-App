import React, { Component } from 'react'

export default class NewDiningModal extends Component {


    state = {
        id: "",
        destination: "Moab",
        type: "Food Truck",
        title: "",
        description: "",
        link: ""
    }

    handleChange = (event) => {
        this.setState({
            id: this.props.nextId,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDining(this.state)
        this.props.hideModal()
        this.setState({
            destination: "",
            type: "",
            title: "",
            description: "",
            link: ""
        })
    }

    goBack = (event) => {
        this.props.hideModal()
        this.setState({
            destination: "",
            type: "",
            title: "",
            description: "",
            link: ""
        })
    }

    putDestinations = () => this.props.destinations.map(destination => {
        return <option key={destination.id} value={destination.title}>{destination.title}</option>
    })

    render() {
        return (
            <div>
                <form className='add-form' onSubmit={this.handleSubmit}>
                    <h2>New Food + Drink</h2>
                    <label>Destination</label>
                    <select name='destination' onChange={this.handleChange} autoComplete='off'>
                        {this.putDestinations()}
                    </select>
                    <label>Type</label>
                    <select name='type' onChange={this.handleChange} autoComplete='off'>
                        <option value="Food Truck">Food Truck</option>
                        <option value="Coffeeshop">Coffeeshop</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Cocktails">Cocktails</option>
                    </select>
                    <label>Title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} autoComplete='off'/>
                    <label>Description</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} autoComplete='off'/>
                    <label>Link</label>
                    <input type='url' name='link' value={this.state.link} onChange={this.handleChange} autoComplete='off'/>
                    <input type='submit' value='Add This Food + Drink Option' className = 'form-button'/>
                </form>
                <button className='form-button' onClick={this.goBack}>Cancel</button>
            </div>
        )
    }
}