'use strict';

module.exports = function(obj, has, cb) {
  if (has instanceof Array) {
    var errors = [];
    has.forEach(function(v) {
      if (typeof obj[v] === 'undefined') {
        errors.push(v);
      }
    });
    if (errors[0]) {
      return cb(errors);
    }
    return cb(null, obj);
  }

  if (has instanceof Object) {
    var errors = {};
    Object.keys(has).forEach(function(v, k) {
      if (typeof obj[v] === 'undefined') {
        errors[v] = has[v]
      }
    });
    if (Object.getOwnPropertyNames(errors).length !== 0) {
      return cb(errors);
    }
    return cb(null, obj);
  }
};
