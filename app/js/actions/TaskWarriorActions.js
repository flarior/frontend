var alt = require('../alt');
var TaskWarriorSource = require('../sources/TaskWarriorSource');

class TaskWarriorActions {
  updateTasks(tasks) {
    this.dispatch(tasks);
  }

  fetchTasks() {
    var self = this;
    this.dispatch();
    TaskWarriorSource
      .fetch()
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ0NDcyOTI4MiwiaWF0IjoxNDQ0MTI0NDgyfQ.eyJ1c2VyX2lkIjoxfQ.YCnq32T1P90fn1t2sr69ROeBWMlQGOWxBCt-Rb8W074')
      .end(function(err, res) {
        self.actions.updateTasks(res.body);
      });
  }

  tasksFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(TaskWarriorActions);
