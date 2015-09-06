var React = require('react');

var Day = React.createClass({
    render() {
        return (
          <div className={this.props.classes}>
            {this.props.day}
          </div>
        );
    }
});

module.exports = Day;
