import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './components/inputbox'
import ShowReminder from './components/showreminder'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      reminders: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteReminder = this.deleteReminder.bind(this)
  }

  handleChange(event) {
      this.setState({value: event.target.value})
  }

  deleteReminder(index){
    var tmpReminder = this.state.reminders
    tmpReminder.splice(index, 1)
    this.setState({reminders: tmpReminder})
  }

  handleSubmit(event) {
      event.preventDefault()
      var tmpReminder = {
        name: this.state.value
      }
      this.setState({
        reminders: this.state.reminders.concat(tmpReminder),
        value: ''
      },function(){
        console.log(this.state.reminders)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputBox value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <ShowReminder reminders={this.state.reminders} deleteReminder={this.deleteReminder}/>
      </div>
    )
  }
}
