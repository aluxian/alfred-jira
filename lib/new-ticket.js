const Jira = require('./jira');
const Workflow = require('./workflow');
const fs = require('fs');
const config = require('./jira/config');
let wf = new Workflow();

module.exports = {
  menu: function (query) {
    // query = query.split(wf._sep).map(s => s.trim());
    // if (query.length < 3) return wf.actionHandler.handle('mainMenu', query)
    // var search = query.pop() || '';
    // var context = query.pop() || '';
    wf.default({ 
      title: 'Create new bug',
      valid: false,
      icon: 'inbox.png'
    })
    wf.feedback();
  }
}
