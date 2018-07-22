import React, { Component } from 'react'

export default class InputText extends Component {
  render() {
    return (
      <div>
        <input type='text' onChange={this.props.handleChangeText}/>
      </div>
    )
  }
}