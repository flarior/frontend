var React = require('react');
var Menu = require('./Menu.jsx');
var Week = require('./Week.jsx');
var Todo = require('./Todo.jsx');


var Calendar = React.createClass({
  render() {
    return (
      <div className="calendar">
        <Menu/>
        <Todo/>
      </div>
    );
  }
});

module.exports = Calendar;
