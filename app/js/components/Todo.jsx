var React = require('react');
var TaskWarriorStore = require('../stores/TaskWarriorStore');
var TaskWarriorAction = require('../actions/TaskWarriorActions');

var Todo = React.createClass({
  getInitialState() {
    return TaskWarriorStore.getState();
  },

  componentDidMount() {
    TaskWarriorStore.listen(this.onChange);
    TaskWarriorAction.fetchTasks();
  },

  componentWillUnmount(){
    TaskWarriorStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
      return (
        <nav id="navigation" className="todo">
          <a href="#">x</a>
          <ul>
            {this.state.tasks.map((task) => {
              return (
                <li>{task.description}</li>
              );
            })}
          </ul>
        </nav>
      );
    }
});

module.exports = Todo;
