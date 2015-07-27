'use strict';

module.exports = function(opts, cb) {
  var errors = {};

  function returnData(data) {
    if (Object.getOwnPropertyNames(data).length !== 0) {
      if (typeof cb === 'function') {
        return cb(data);
      }
      return new Error('missing required argument: ' + Object.keys(errors)[0]);
    }
    if (typeof cb === 'function') {
      return cb(null, opts.obj);
    }
    return opts.obj;
  }

  if (opts.required.constructor === Array) {
    opts.required.forEach(function(v) {
      if (typeof opts.obj[v] === 'undefined' || opts.obj[v] === null || opts.obj[v].length === 0) {
        errors[v] = 'is required';
      }
    });
    return returnData(errors);
  }

  if (opts.required instanceof Object) {
    Object.keys(opts.required).forEach(function(v) {
      if (typeof opts.obj[v] === 'undefined' || opts.obj[v] === null || opts.obj[v].length === 0) {
        errors[v] = opts.required[v];
      }
    });
    return returnData(errors);
  }

};
