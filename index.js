var app = {};


/**
 * Define new attribute.
 * 
 * @param {String, Value, Boolean}
 * @return None
 * @api public
 */
function define(key, value, overwrite)
{
	if(overwrite || !app.hasOwnProperty(key))
		app.key = value;
}

app.define = define;

module.exports = app;