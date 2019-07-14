var Jira = require('./jira');
var Workflow = require('./workflow');
var wf = new Workflow();

module.exports = query => {
    let alfredContent = query;
    query = query.split(wf._sep).map(s => s.trim());
    let title = query.pop() || '';
    let context = query.pop() || '';
//    let data = wf.storage.get(context + '-comment');
//    let key = data._key.replace('-comment', '');
    
    // Default script filter result
    wf.default({ 
      title: 'Begin typing a title:', 
      icon: 'comment.png', 
      valid: false
    });
        
    // Return a preview of the comment string that will be sent to JIRA
    // Pressing enter will POST comment to JIRA
    if (title.trim()) {
      wf.addItem({
        title: title.replace(/'/g, "\\'"),
        subtitle: 'Bug',
        valid: true,
        icon: 'comment.png',
        arg: ['bug', title.replace(/'/g, "\\'")].join(' ')
      })
    }
    
    // Return the workflow feedback
    wf.feedback();
}
