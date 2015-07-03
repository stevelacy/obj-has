'use strict';

module.exports = function(obj, has, cb) {
  var errors = {};

  function returnData(data) {
    if (Object.getOwnPropertyNames(data).length !== 0) {
      if (typeof cb === 'function') {
        return cb(data);
      }
      return new Error('missing required argument: ' + Object.keys(errors)[0]);
    }
    if (typeof cb === 'function') {
      return cb(null, obj);
    }
    return obj;
  }

  if (has.constructor === Array) {
    has.forEach(function(v) {
      if (typeof obj[v] === 'undefined') {
        errors[v] = 'is required';
      }
    });
    return returnData(errors);
  }

  if (has instanceof Object) {
    Object.keys(has).forEach(function(v) {
      if (typeof obj[v] === 'undefined') {
        errors[v] = has[v];
      }
    });
    return returnData(errors);
  }

};
