# input

React component for DateTime (extra information)

original datetime component from
https://www.npmjs.com/package/material-ui-datetimepicker
https://github.com/dmtrKovalenko/material-ui-datetimepicker

## Pre-requisite
Requires material ui v0

## Usage

### Install
```
npm i @react-ag-components/datetime --save
```
### Use in your project
```
import DateTimePicker from '@react-ag-components/datetime'
```

```


<DateTimePicker
  value={this.state.startDateTime}
  customValue={this.state.startDateTime}
  onChange={this.onChange('startDateTime')}
  DatePicker={DatePickerDialog}
  TimePicker={TimePickerDialog}
  floatingLabelText="Start date time"
  format={'DD MMM YYYY hh:mm A'}
/>
```

### Properties

| Property    | Default       | Description                                |
| --------    |:-------------:|-------------------------------------------:|
| format        |     'MMM DD, YYYY hh:mm A'            |                 moment date format                        |
| customValue       |    datetime now    |      |
| onChange       |      |   function   |
| floatingLabelText       |    label   |      |



## Contributing

Get the repository
```
git clone https://github.com/alphillips/datetime.git
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
