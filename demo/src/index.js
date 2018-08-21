import React, {Component} from 'react'
import {render} from 'react-dom'
import {TextField} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import DateTimePicker from '../../src'

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDateTime:null,
      startDateTimeWithData:"2018-04-01T09:00:00"
    }
  }
  onChange = (field) => {
    return (value) => {
      this.setState((prevState, props) => ({
        [field]: value
      }))
    }
  }

  reportDateTime = () => {
    console.log("startDateTimeWithData "+ this.state.startDateTimeWithData)
  }

  render() {
    const text = 'Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.';
    const buttonContainer = {marginTop:'50px'}
    return (
      <div>
        <h1>DateTime</h1>

        <h2>Basic DateTime</h2>

        <DateTimePicker
          value={this.state.startDateTime}
          onChange={this.onChange('startDateTime')}
          label="Start date time"
          id="basic-start-date"
          required={true}
        />

        <h2>Custom Date Time Format</h2>

        <DateTimePicker
          value={this.state.startDateTimeWithData}
          onChange={this.onChange('startDateTimeWithData')}
          label="Start date time"
          required={true}
        />

        <div style={buttonContainer}>
          <button onClick={this.reportDateTime}>Get dateTime</button>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
