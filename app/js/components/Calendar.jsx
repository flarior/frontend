var React = require('react');
var Day = require('./Day.jsx')

var Hours = React.createClass({
  render: function() {
    return (
      <div className="content text--center u-1/40">
        <div className="content-item">sati</div>
      </div>
    );
  }
});

var Calendar = React.createClass({
  getInitialState: function() {
    var current_date = new Date();
    var month_names = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    var current_month_number = current_date.getMonth();
    var current_month_name = month_names[current_month_number];
    var days_in_week = [
      {
        'name': 'Monday',
        'number': 1
      },
      {
        'name': 'Tuesday',
        'number': 2,
      },
      {
        'name': 'Wednesday',
        'number': 3,
      },
      {
        'name': 'Thursday',
        'number': 4,
      },
      {
        'name': 'Friday',
        'number': 5,
      },
      {
        'name': 'Saturday',
        'number': 6,
      },
      {
        'name': 'Sunday',
        'number': 0,
      }
    ];
    return {
      days: days_in_week,
      current_month_name: current_month_name,
      current_month_number: current_month_number,
    };
  },

  current_day_number: null,

  componentWillMount: function() {
    this.current_day_number = new Date().getDay();
  },

  render: function() {
    return (
      <div className="calendar">
        <h1>{this.state.current_month_name}</h1>
        <Hours />
        <div className="u-39/40 content">
          {this.state.days.map((day) => {
            var classes = "u-1/7 text--center content-item";
            if (this.current_day_number === day.number) {
              classes += " current";
            }
            if (day.number === 6 || day.number === 0) {
              classes += " weekend"
            }
            return <Day day={day.name} classes={classes}/>
          })}
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
