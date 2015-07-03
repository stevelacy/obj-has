# obj-has

[![Build Status](https://travis-ci.org/stevelacy/obj-has.png?branch=master)](https://travis-ci.org/stevelacy/obj-has)
[![NPM version](https://badge.fury.io/js/obj-has.png)](http://badge.fury.io/js/obj-has)

> Determine if an Object has required properties

## Information

<table>
<tr>
<td>Package</td><td>obj-has</td>
</tr>
<tr>
<td>Description</td>
<td>Determine if an Object has required properties defined in an Array or Object</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>

## Usage

#### Install

```sh
$ npm install --save-dev obj-has
```

## Examples

```js
var has = require('obj-has');

// Array of required keys
var required = [
  'test',
  'second',
  'missing'
];

var object = {
  test: 'item',
  second: false
};

has(object, required, function(err, data) {
  // => ['missing']
});


// Object of required keys and error messages
var required = {
  test: 'test is required',
  second: 'second as well',
  missing: 'required key'
};

var object = {
  test: 'item',
  second: false
};

has(object, required, function(err, data) {
  // => { missing: 'required key' }
});

```

#### returns
`Object or Array`

```js
var has = require('obj-has');

// Array of required keys
var required = [
  'test',
  'second',
  'missing'
];

var object = {
  test: 'item',
  second: false
};

check = has(object, required);
// => Error ['missing required argument: missing']


```



## LICENSE [MIT](LICENSE)
