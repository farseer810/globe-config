var config = require('../');
config.define('name', 'farseer810');
console.log(config);
config.define('funcToBeUsedInOtherFiles', function(){});
console.log(config);