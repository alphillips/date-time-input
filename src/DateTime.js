import React from 'react';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog'
import TimePicker from 'material-ui/TimePicker/TimePickerDialog';
import moment from 'moment';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { IconButton } from 'material-ui';
import Input from '@react-ag-components/input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './datetime.css'


const styles = {
};

class DateTime extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dateTime: this.getInitialTime()
		}
	}

  static defaultProps = {
    value: undefined,
		label:undefined,
    id:"datetime"+(Math.floor(Math.random()).toString()),
    okLabel: 'OK',
    minDate: undefined,
    maxDate: undefined,
    name: 'datepicker',
    format: 'DD MMM YYYY hh:mm A',
    timePickerDelay: 150,
    className: 'datetime-container',
    textFieldClassName: 'datetime-input',
    autoOkDatePicker: true,
    datePickerMode: 'portrait',
    openToYearSelection: false,
    disableYearSelection: false,
    hideCalendarDate: false,
    firstDayOfWeek: 1,
    disabled: false,
    placeholder: undefined,

    DateTimeFormat: undefined,
    locale: undefined,

    timeFormat: 'ampm',
    autoOkTimePicker: false,
    timePickerDialogStyle: {},
    minutesStep: 1,
    showCurrentDateByDefault: false,
    returnMomentDate: false,
    clearIcon: <ClearIcon color="#999999" />,

    // styles
    clearIconStyle: { },
    textFieldStyle: { },
    style: { },
    timePickerBodyStyle: { },

    // functions
    onChange: () => { },
    onFocus: () => { },
    onTimePickerShow: () => { },
    onDatePickerShow: () => { },
    onDateSelected: () => { },
    onTimeSelected: () => { },
    shouldDisableDate: () => { },
    onDatePickerDismiss: () => { }
  }

  // eslint-disable-next-line
  getInitialTime = () => this.props.value
    ? moment(this.props.value)
    : null

  componentDidUpdate = (prevProps) => {
    if (prevProps.value !== this.props.value) {
      this.setState({ dateTime: this.getInitialTime() });
    }
  }

	getDisplayTime = () => {
    const {dateTime}  = this.state;
		const format = this.props.format ? this.props.format : defaultProps.format
    const defaultTime = this.props.showCurrentDateByDefault
      ? moment().format(this.props.format)
      : this.props.placeholder || '';
     const displayDateTime = dateTime ? moment(dateTime).format(this.props.format) : defaultTime;
     return displayDateTime
  }

  /*
    * Get current selected date by user
    @returns { Object } moment or vanilla date object
  */

  getDateOrCurrentTime = () => (this.state.dateTime
    ? moment(this.state.dateTime).toDate()
    : new Date())

  getDateOrNull = time => (time
    ? moment(time).toDate()
    : null)

  openDatePicker = (e) => {
    e.preventDefault();
    this.datePicker.show();
  }

  selectDate = (date) => {
		const { dateTime } = this.state;

    let dateTimeVar = moment(date)
			.set('hours', moment(dateTime).hours()) // fill time unites
      .set('minutes', moment(dateTime).minutes());

		this.props.onChange(moment(dateTimeVar).toDate());
		this.setState({ dateTime:dateTimeVar });

    // show timepicker
    setTimeout(() => this.timePicker.show(), this.props.timePickerDelay);
  }

  selectTime = (date) => {
    const { dateTime } = this.state;

    dateTime.hours(date.getHours());
    dateTime.minutes(date.getMinutes());

		this.props.onChange(moment(dateTime).toDate());

    this.setState({ dateTime });
  }

  handleFocus = (event) => {
    event.target.blur();
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  clearState = () => {
    this.setState({ dateTime: null });
    this.props.onChange(null);
  }

  render() {
    const {
      clearIcon, maxDate, minDate, timeFormat,id,required,
      firstDayOfWeek, textFieldClassName, className, autoOkDatePicker,
      datePickerMode, disableYearSelection, shouldDisableDate,
      hideCalendarDate, openToYearSelection, timePickerBodyStyle,
      okLabel, autoOkTimePicker, timePickerDialogStyle, clearIconStyle, style, textFieldStyle,
      minutesStep,
      timePickerDelay,
      showCurrentDateByDefault,
      returnMomentDate,
      DateTimeFormat, locale,
      onTimePickerShow,
      onTimePickerDismiss,
      onDatePickerShow,
      onDatePickerDismiss,
      onDateSelected,
      onTimeSelected,
      disabled,
      value,
      ...other
    } = this.props;

    return (
	      <div style={{ ...styles.container, style }} className={ className }>
        <MuiThemeProvider>
					<Input
 	          onFocus={this.handleFocus}
 	          className={textFieldClassName}
 	          onClick={this.openDatePicker}
 	          value={this.getDisplayTime()}
						floatingLabelText={this.props.label}
 	          disabled={disabled}
						required={required}
            id={id}
 	          {...other}
 	        />
        </MuiThemeProvider>
        <MuiThemeProvider>
	        {
	          clearIcon
	            ? <IconButton
	              onClick={this.clearState}
	              style={{ ...styles.clearIcon, ...clearIconStyle }}
	              disabled={disabled}>
	              { clearIcon }
	            </IconButton>
	            : null
	        }
        </MuiThemeProvider>
        <MuiThemeProvider>
	        <DatePicker
	          ref={(node) => { this.datePicker = node; }}
	          initialDate={this.getDateOrCurrentTime()}
	          maxDate={this.getDateOrNull(maxDate)}
	          minDate={this.getDateOrNull(minDate)}
	          okLabel={okLabel}
	          autoOk={autoOkDatePicker}
	          firstDayOfWeek={firstDayOfWeek}
	          onAccept={this.selectDate}
	          mode={datePickerMode}
	          disableYearSelection={disableYearSelection}
	          onShow={onDatePickerShow}
	          onDismiss={onDatePickerDismiss}
	          shouldDisableDate={shouldDisableDate}
	          hideCalendarDate={hideCalendarDate}
	          openToYearSelection={openToYearSelection}
	          DateTimeFormat = { DateTimeFormat }
	          locale = { locale }
	        />
        </MuiThemeProvider>
        <MuiThemeProvider>
	        <TimePicker
	          ref={(node) => { this.timePicker = node; }}
	          initialTime={this.getDateOrCurrentTime()}
	          onAccept={this.selectTime}
	          bodyStyle={timePickerBodyStyle}
	          onShow={onTimePickerShow}
	          format={timeFormat}
	          okLabel={okLabel}
	          autoOk={autoOkTimePicker}
	          style={timePickerDialogStyle}
	          minutesStep={minutesStep}
	          onDismiss={onTimePickerDismiss}
	        />
        </MuiThemeProvider>
	      </div>
    );
  }
}

export default DateTime;
