import React, { Component } from 'react'

export default class ShowReminder extends Component {
    render() {
        return (
            <div>
                {this.props.reminders.map((reminder, index) => {
                    return(
                        <p>
                            {reminder.name}
                            <span>
                                <button onClick={() => this.props.deleteReminder(index)}>x</button>
                            </span>
                        </p>
                    )
                })}
            </div>
        )
    }
}