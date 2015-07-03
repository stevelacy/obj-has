'use strict';

var should = require('should');
var has = require('..');

describe('obj-has', function() {
  describe('#array', function() {

    var required = [
      'test',
      'second',
      'missing'
    ];

    it('should return an array with missing keys', function(done) {

      var object = {
        test: 'item',
        second: false
      };

      has(object, required, function(err, data) {
        should(err).be.instanceof(Array);
        should(err[0]).equal('missing');
        done();
      });

    });

    it('should return null and the object without missing keys', function(done) {

      var object = {
        test: 'item',
        second: false,
        missing: 'false'
      };

      has(object, required, function(err, data) {
        should(err).be.null;
        should(data).equal(object);
        done();
      });

    });

  });

  describe('#object', function() {

    var required = {
      test: 'test is required',
      second: 'second as well',
      missing: 'same as before'
    };

    it('should return an object with missing keys and errors', function(done) {

      var object = {
        test: 'item',
        second: false
      };

      has(object, required, function(err, data) {
        should(err).be.instanceof(Object);
        should(err['missing']).not.be.null;
        should(err['missing']).equal('same as before');
        done();
      });
    });

    it('should return null and the object without missing keys', function(done) {

      var object = {
        test: 'item',
        second: false,
        missing: 'false'
      };

      has(object, required, function(err, data) {
        should(err).be.null;
        should(data).equal(object);
        done();
      });

    });
  });
});
