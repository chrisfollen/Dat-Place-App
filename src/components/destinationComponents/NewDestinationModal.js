import React, { Component } from 'react'

export default class NewAccomodationModal extends Component {


    state = {
        id: "",
        title: "",
        image_url: "",
    }

    handleChange = (event) => {
        this.setState({
            id: this.props.nextId,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDestination(this.state)
        this.props.hideModal()
        this.setState({
            title: "",
            image_url: "",
        })
    }

    goBack = (event) => {
        this.props.hideModal()
        this.setState({
            title: "",
            image_url: "",
        })
    }

    render() {
        return (
            <div>
                <form className='add-form' onSubmit={this.handleSubmit}>
                    <h2>New Destination</h2>
                    <label>Destination Name</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} autoComplete='off'/>
                    <label>Image URL</label>
                    <input type='text' name='image_url' value={this.state.image_url} onChange={this.handleChange} autoComplete='off'/>
                    <input className = 'form-button' type='submit' value='Add This Destination' />
                </form>
                <button className='form-button' onClick={this.goBack}>Cancel</button>
            </div>
        )
    }
}