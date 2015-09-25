var React = require('react');
var moment  = require('moment');

var Title = React.createClass({
  getInitialState: function(){
    var today = moment()
    var startWeek = moment([today.year(), today.month(), today.date() - today.day()+1])
    var endWeek = moment([today.year(), today.month(), startWeek.date()+6])
    return {
      start: startWeek,
      end: endWeek
    };
  },
  nextWeek: function(event){
    this.setState({start: this.state.start.day(7), end: this.state.end.day(7)})
  },
  previousWeek: function(event){
    this.setState({start: this.state.start.day(-7), end: this.state.end.day(-7)})
  },

    render() {
        return (
          <div className="title">
            <div className="u-1/3 title--item title--previous">
              <a href="#" onClick={this.previousWeek}>&lt;</a>
            </div>
            <div className="u-1/3 title--item title--data">
              <h3>{this.state.start.format("D MMM")} - {this.state.end.format("D MMM")}</h3>
            </div>
            <div className="u-1/3 title--item title--next">
              <a href="#" onClick={this.nextWeek}>&gt;</a>
            </div>
          </div>
        );
    }
});

module.exports = Title;
