var React = require('react');
var moment  = require('moment');
var Day = require('./Day.jsx');
var Title = require('./Title.jsx');

var Week = React.createClass({
  getInitialState: function(){
    var today = moment();
    var startWeek = moment(today).day(-6);
    var endWeek = moment(startWeek).day(7);
    var longDayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    return ({
      start: startWeek,
      end: endWeek,
      longDayNames: longDayNames
    });
  },

  nextWeek: function(event){
    this.setState({start: this.state.start.day(8), end: this.state.end.day(7)});
  },

  previousWeek: function(event){
    this.setState({start: this.state.start.day(-6), end: this.state.end.day(-7)});
  },

  render() {
    var days = [];
    for (var day = 0; day < 7; day++) {

      days.push({
        dayOfMonth: moment(this.state.start).day(day+1).format('D'),
        name: this.state.longDayNames[day]
      });
    }

    return (
      <div className="content">
        <Title
          start={this.state.start}
          end={this.state.end}
          previous={this.previousWeek}
          next={this.nextWeek}
        />
        {days.map((day) => {
          return (
            <Day dayOfMonth={day.dayOfMonth} name={day.name}/>
          );
        })}
      </div>
    );
  }
});

module.exports = Week;
