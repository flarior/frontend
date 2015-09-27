var React = require('react');
var moment  = require('moment');

var Title = React.createClass({
  render() {
      return (
        <div className="title">
          <div className="u-1/3 title--item title--previous">
            <a href="#" onClick={this.props.previous}>&lt;</a>
          </div>
          <div className="u-1/3 title--item title--data">
            <h3>{this.props.start.format("D MMM")} - {this.props.end.format("D MMM")}</h3>
          </div>
          <div className="u-1/3 title--item title--next">
            <a href="#" onClick={this.props.next}>&gt;</a>
          </div>
        </div>
      );
  }
});

module.exports = Title;
