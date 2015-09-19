var React = require('react');

var Menu = React.createClass({
    render() {
        return (
          <div className="breadcrumb">
            <a href="#">Day</a>
            <a href="#" className="active">Week</a>
            <a href="#">Month</a>
          </div>
        );
    }
});

module.exports = Menu;
