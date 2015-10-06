var request = require('superagent');

var TaskWarriorSource = {
  fetch: function() {
    return request.get('http://localhost:5000/api/v0/tasks');
  }
};

module.exports = TaskWarriorSource;
