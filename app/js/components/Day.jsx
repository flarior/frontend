var React = require('react');

var Day = React.createClass({
  render() {
    var hours = [];
    for (var hour = 0; hour < 24; hour++) {
      realHour = hour;
      if (hour > 12) {
        realHour -= 12;
      }

      if (hour > 11) {
        realHour = String(realHour) + 'pm';
      }
      else {
        realHour = String(realHour) + 'am';
      }
      hours.push(realHour);
    }
    return (
      <div className="u-1/7 day">
        <span className="u-6/7 day-name">{this.props.name}</span>
        <span className="u-1/7 day-of-month">{this.props.dayOfMonth}</span>
        {hours.map((hour) => {
          return(
            <div className="hour" title={hour}></div>
          );
        })}
      </div>
    );
  }
});

module.exports = Day;
