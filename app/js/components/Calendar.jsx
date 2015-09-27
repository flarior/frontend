var React = require('react');
var Menu = require('./Menu.jsx');
var Week = require('./Week.jsx');
var Todo = require('./Todo.jsx');

var Calendar = React.createClass({
  render: function() {
    return (
      <div className="calendar">
        <Menu/>
        <Week/>
        <Todo/>
      </div>
    );
  }
});

module.exports = Calendar;
