var React = require('react');

var Day = React.createClass({
    render() {
      var class_list = "day " + "{this.props.day}";
        return (
          <div className={this.props.classes}>
            {this.props.day}
          </div>
        );
    }
});

module.exports = Day;
