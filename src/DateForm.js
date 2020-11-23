import React, { Component } from 'react';

export class DateForm extends Component {
    constructor(props) {
        super(props);
        const {name, date} = this.props;
        this.state = { name,  date};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        this.props.handleFormSubmit(this.state.name, this.state.date);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="date-form">
                <label>
                    Event name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <label>
                    Event date
                    <input type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                </label>
                <input type="submit"></input>
            </form>
        )
    }
}