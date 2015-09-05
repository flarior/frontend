var React = require('react');
var Day = require('./Day.jsx')

var days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

var Calendar = React.createClass({
    render() {
        return (
          <div className="calendar">
            <h1>My first react app</h1>
            {days.map((day) => {
              return <Day day={day} classes={"day " + day}/>
            })}
          </div>
        );
    }
});

module.exports = Calendar;
