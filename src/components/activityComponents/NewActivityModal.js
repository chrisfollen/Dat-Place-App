import React, { Component } from 'react'

export default class NewActivityModal extends Component {


    state = {
        id: "",
        destination: "Moab",
        type: "Biking",
        title: "",
        description: "",
        coordinates: "",
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
        this.props.addActivity(this.state)
        this.props.hideModal()
        this.setState({
        destination: "",
        type: "",
        title: "",
        description: "",
        coordinates: "",
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
            coordinates: "",
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
                    <h2>New Activity</h2>
                    <label>Destination</label>
                    <select name='destination' onChange={this.handleChange} autoComplete='off'>
                        {this.putDestinations()}
                    </select>
                    <label>Type</label>
                    <select name='type' onChange={this.handleChange} autoComplete='off'>
                        <option value="Biking">Biking</option>
                        <option value="Surfing">Surfing</option>
                        <option value="Offroading">Offroading</option>
                        <option value="Relaxing">Relaxing</option>
                        <option value="Hiking">Hiking</option>
                        <option value="Boating">Boating</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Other">Other</option>
                    </select>
                    <label>Title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} autoComplete='off'/>
                    <label>Description</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} autoComplete='off'/>
                    <label>Coordinates</label>
                    <input type='text' name='coordinates' value={this.state.coordinates} onChange={this.handleChange} autoComplete='off'/>
                    <label>Link</label>
                    <input type='url' name='link' value={this.state.link} onChange={this.handleChange} autoComplete='off'/>
                    <input type='submit' value='Add This Activity' className = 'form-button'/>
                </form>
                <button className='form-button' onClick={this.goBack}>Cancel</button>
            </div>
        )
    }
}