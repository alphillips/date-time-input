import React, {Component} from 'react'
import {render} from 'react-dom'

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

  render() {
    const text = 'Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.';
    return (
      <div>
        <h1>DateTime</h1>

        <h2>Basic DateTime</h2>

        <DateTimePicker
          value={this.state.startDateTime}
          onChange={this.onChange('startDateTime')}
          label="Start date time"
        />

      <h2>Custom Date Time Format</h2>

        <DateTimePicker
          value={this.state.startDateTimeWithData}
          onChange={this.onChange('startDateTimeWithData')}
          label="Start date time"
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
