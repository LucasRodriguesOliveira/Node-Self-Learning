const os = require('os');
os.setPriority(os.constants.priority.PRIORITY_HIGHEST);

console.log(os.getPriority());