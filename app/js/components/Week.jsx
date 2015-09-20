var React = require('react');
var Day = require('./Day.jsx');

var Week = React.createClass({
  render() {
    var days = [];
    var day_names = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    for (var day = 1; day <= 7; day++) {
      days.push({
        dayOfMonth: day,
        day: day_names[day-1]
      });
    }
    return (
      <div className="content">
        {days.map((day) => {
          return (
            <Day dayOfMonth={day.dayOfMonth} day={day.day}/>
          );
        })}
      </div>
    );
  }
});

module.exports = Week;
