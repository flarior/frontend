var alt = require('../alt');
var TaskActions = require('../actions/TaskWarriorActions');


class TaskWarriorStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleUpdateTasks: TaskActions.UPDATE_TASKS,
      handleFetchTasks: TaskActions.FETCH_TASKS,
      handleTasksFailed: TaskActions.TASKS_FAILED
    });
  }

  handleUpdateTasks(tasks) {
    this.tasks = tasks;
    this.errorMessage = null;
  }

  handleFetchTasks() {
    this.tasks = [];
  }

  handleTasksFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}


module.exports = alt.createStore(TaskWarriorStore, 'TaskWarriorStore');
