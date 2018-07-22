import React, { Component } from 'react'

export default class InputBox extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label> Reminder:
                    <textarea value={this.props.value} onChange={this.props.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}