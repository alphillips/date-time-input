'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePickerDialog = require('material-ui/DatePicker/DatePickerDialog');

var _DatePickerDialog2 = _interopRequireDefault(_DatePickerDialog);

var _TimePickerDialog = require('material-ui/TimePicker/TimePickerDialog');

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _clear = require('material-ui/svg-icons/content/clear');

var _clear2 = _interopRequireDefault(_clear);

var _materialUi = require('material-ui');

var _input = require('@react-ag-components/input');

var _input2 = _interopRequireDefault(_input);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

require('./datetime.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var DateTime = (_temp = _class = function (_React$Component) {
  _inherits(DateTime, _React$Component);

  function DateTime(props) {
    _classCallCheck(this, DateTime);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.getInitialTime = function () {
      return _this.props.value ? (0, _moment2.default)(_this.props.value) : null;
    };

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.value !== _this.props.value) {
        _this.setState({ dateTime: _this.getInitialTime() });
      }
    };

    _this.getDisplayTime = function () {
      var dateTime = _this.state.dateTime;

      var format = _this.props.format ? _this.props.format : defaultProps.format;
      var defaultTime = _this.props.showCurrentDateByDefault ? (0, _moment2.default)().format(_this.props.format) : _this.props.placeholder || '';
      var displayDateTime = dateTime ? (0, _moment2.default)(dateTime).format(_this.props.format) : defaultTime;
      return displayDateTime;
    };

    _this.getDateOrCurrentTime = function () {
      return _this.state.dateTime ? (0, _moment2.default)(_this.state.dateTime).toDate() : new Date();
    };

    _this.getDateOrNull = function (time) {
      return time ? (0, _moment2.default)(time).toDate() : null;
    };

    _this.openDatePicker = function (e) {
      e.preventDefault();
      _this.datePicker.show();
    };

    _this.selectDate = function (date) {
      var dateTime = _this.state.dateTime;


      var dateTimeVar = (0, _moment2.default)(date).set('hours', (0, _moment2.default)(dateTime).hours()) // fill time unites
      .set('minutes', (0, _moment2.default)(dateTime).minutes());

      _this.props.onChange((0, _moment2.default)(dateTimeVar).toDate());
      _this.setState({ dateTime: dateTimeVar });

      // show timepicker
      setTimeout(function () {
        return _this.timePicker.show();
      }, _this.props.timePickerDelay);
    };

    _this.selectTime = function (date) {
      var dateTime = _this.state.dateTime;


      dateTime.hours(date.getHours());
      dateTime.minutes(date.getMinutes());

      _this.props.onChange((0, _moment2.default)(dateTime).toDate());

      _this.setState({ dateTime: dateTime });
    };

    _this.handleFocus = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    _this.clearState = function () {
      _this.setState({ dateTime: null });
      _this.props.onChange(null);
    };

    _this.state = {
      dateTime: _this.getInitialTime()
    };
    return _this;
  }

  // eslint-disable-next-line


  /*
    * Get current selected date by user
    @returns { Object } moment or vanilla date object
  */

  DateTime.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        clearIcon = _props.clearIcon,
        maxDate = _props.maxDate,
        minDate = _props.minDate,
        timeFormat = _props.timeFormat,
        id = _props.id,
        required = _props.required,
        firstDayOfWeek = _props.firstDayOfWeek,
        textFieldClassName = _props.textFieldClassName,
        className = _props.className,
        autoOkDatePicker = _props.autoOkDatePicker,
        datePickerMode = _props.datePickerMode,
        disableYearSelection = _props.disableYearSelection,
        shouldDisableDate = _props.shouldDisableDate,
        hideCalendarDate = _props.hideCalendarDate,
        openToYearSelection = _props.openToYearSelection,
        timePickerBodyStyle = _props.timePickerBodyStyle,
        okLabel = _props.okLabel,
        autoOkTimePicker = _props.autoOkTimePicker,
        timePickerDialogStyle = _props.timePickerDialogStyle,
        clearIconStyle = _props.clearIconStyle,
        style = _props.style,
        textFieldStyle = _props.textFieldStyle,
        minutesStep = _props.minutesStep,
        timePickerDelay = _props.timePickerDelay,
        showCurrentDateByDefault = _props.showCurrentDateByDefault,
        returnMomentDate = _props.returnMomentDate,
        DateTimeFormat = _props.DateTimeFormat,
        locale = _props.locale,
        onTimePickerShow = _props.onTimePickerShow,
        onTimePickerDismiss = _props.onTimePickerDismiss,
        onDatePickerShow = _props.onDatePickerShow,
        onDatePickerDismiss = _props.onDatePickerDismiss,
        onDateSelected = _props.onDateSelected,
        onTimeSelected = _props.onTimeSelected,
        disabled = _props.disabled,
        value = _props.value,
        other = _objectWithoutProperties(_props, ['clearIcon', 'maxDate', 'minDate', 'timeFormat', 'id', 'required', 'firstDayOfWeek', 'textFieldClassName', 'className', 'autoOkDatePicker', 'datePickerMode', 'disableYearSelection', 'shouldDisableDate', 'hideCalendarDate', 'openToYearSelection', 'timePickerBodyStyle', 'okLabel', 'autoOkTimePicker', 'timePickerDialogStyle', 'clearIconStyle', 'style', 'textFieldStyle', 'minutesStep', 'timePickerDelay', 'showCurrentDateByDefault', 'returnMomentDate', 'DateTimeFormat', 'locale', 'onTimePickerShow', 'onTimePickerDismiss', 'onDatePickerShow', 'onDatePickerDismiss', 'onDateSelected', 'onTimeSelected', 'disabled', 'value']);

    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.container, { style: style }), className: className },
      _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_input2.default, _extends({
          onFocus: this.handleFocus,
          className: textFieldClassName,
          onClick: this.openDatePicker,
          value: this.getDisplayTime(),
          floatingLabelText: this.props.label,
          disabled: disabled,
          required: required,
          id: id
        }, other))
      ),
      _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        clearIcon ? _react2.default.createElement(
          _materialUi.IconButton,
          {
            onClick: this.clearState,
            style: _extends({}, styles.clearIcon, clearIconStyle),
            disabled: disabled },
          clearIcon
        ) : null
      ),
      _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_DatePickerDialog2.default, {
          ref: function ref(node) {
            _this2.datePicker = node;
          },
          initialDate: this.getDateOrCurrentTime(),
          maxDate: this.getDateOrNull(maxDate),
          minDate: this.getDateOrNull(minDate),
          okLabel: okLabel,
          autoOk: autoOkDatePicker,
          firstDayOfWeek: firstDayOfWeek,
          onAccept: this.selectDate,
          mode: datePickerMode,
          disableYearSelection: disableYearSelection,
          onShow: onDatePickerShow,
          onDismiss: onDatePickerDismiss,
          shouldDisableDate: shouldDisableDate,
          hideCalendarDate: hideCalendarDate,
          openToYearSelection: openToYearSelection,
          DateTimeFormat: DateTimeFormat,
          locale: locale
        })
      ),
      _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_TimePickerDialog2.default, {
          ref: function ref(node) {
            _this2.timePicker = node;
          },
          initialTime: this.getDateOrCurrentTime(),
          onAccept: this.selectTime,
          bodyStyle: timePickerBodyStyle,
          onShow: onTimePickerShow,
          format: timeFormat,
          okLabel: okLabel,
          autoOk: autoOkTimePicker,
          style: timePickerDialogStyle,
          minutesStep: minutesStep,
          onDismiss: onTimePickerDismiss
        })
      )
    );
  };

  return DateTime;
}(_react2.default.Component), _class.defaultProps = {
  value: undefined,
  label: undefined,
  id: "datetime" + Math.floor(Math.random()).toString(),
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
  clearIcon: _react2.default.createElement(_clear2.default, { color: '#999999' }),

  // styles
  clearIconStyle: {},
  textFieldStyle: {},
  style: {},
  timePickerBodyStyle: {},

  // functions
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onTimePickerShow: function onTimePickerShow() {},
  onDatePickerShow: function onDatePickerShow() {},
  onDateSelected: function onDateSelected() {},
  onTimeSelected: function onTimeSelected() {},
  shouldDisableDate: function shouldDisableDate() {},
  onDatePickerDismiss: function onDatePickerDismiss() {} }, _temp);
exports.default = DateTime;
module.exports = exports['default'];