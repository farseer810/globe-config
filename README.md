# globe-config
A light-weight tool for global configuration.
## Table of contents
- [Installation](#install)
- [Introduction](#introduction)
- [Usage](#usage)

## Installation
```sh
$ npm install globe-config
```

## Introduction
In Python(and other similar languages), relative path starts from the entry file.For instance, 

db.py:
```python
def getConnection():
	#some code to get and to return a database connection
```

main.py:
```python
import db
con = db.getConnection()
```

dir/test.py:
```python
import db
con = db.getConnection()
```

As you can see, same code(import db) is used to including codes in file "db.py". But with "require" syntax in nodejs, relative path must reflect the relative location between the including and the included.

main.js
```js
require('./db');
```

dir/test.py:
```js
require('../db');
```

This modeul is created to solve this problem.


## Usage
This module has only one api: define, whose prototype is defined as follow:
```js
function function define(key, value, overwrite)
```

Params: 
* 'key': key for the inserted value
* 'value': value to be inserted
* 'overwrite': OPTIONAL, whether to overwrite the current corresponding value of the given key.


```js
var config = require('globe-config');
config.define('name', 'farseer810');
console.log(config.name);
config.define('funcToBeUsedInOtherFiles', function(){});
```
