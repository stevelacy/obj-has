'use strict';

var should = require('should');
var has = require('..');

describe('obj-has', function() {
  describe('callback', function() {
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

        has(object, required, function(err) {
          should(err).be.instanceof(Object);
          should(err.missing).equal('is required');
          done();
        });

      });

      it('should return an array with null keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: null
        };

        has(object, required, function(err) {
          should(err).be.instanceof(Object);
          should(err.missing).equal('is required');
          done();
        });

      });

      it('should return an array with empty keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: ''
        };

        has(object, required, function(err) {
          should(err).be.instanceof(Object);
          should(err.missing).equal('is required');
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
          should(data).be.type.undefined;
          should(err.missing).not.be.null;
          should(err.missing).equal('same as before');
          done();
        });
      });

      it('should return an array with null keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: null
        };

        has(object, required, function(err) {
          should(err).be.instanceof(Object);
          should(err.missing).equal('same as before');
          done();
        });

      });

      it('should return an array with empty keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: ''
        };

        has(object, required, function(err) {
          should(err).be.instanceof(Object);
          should(err.missing).equal('same as before');
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

  describe('returns', function() {
    describe('#array', function() {

      var required = [
        'test',
        'second',
        'missing'
      ];

      it('should return an object with missing keys', function(done) {

        var object = {
          test: 'item',
          second: false
        };

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return an object with null keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: null
        };

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return an object with empty keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: ''
        };

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return null and the object without missing keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: 'false'
        };

        var check = has(object, required);
        should(check).be.instanceof(Object);
        should(check).equal(object);
        done();

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

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return an object with null keys and errors', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: null
        };

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return an object with empty keys and errors', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: ''
        };

        var check = has(object, required);
        should(check).be.instanceof(Error);
        should(check.message).equal('missing required argument: missing');
        done();

      });

      it('should return null and the object without missing keys', function(done) {

        var object = {
          test: 'item',
          second: false,
          missing: 'false'
        };

        var check = has(object, required);
        should(check).be.instanceof(Object);
        should(check).equal(object);
        done();

      });
    });

  });
});
