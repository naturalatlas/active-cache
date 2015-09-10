var ActiveAsyncCache = require('../async.js');
var assert = require('chai').assert;

describe('async', function() {
	it('should operate normally', function(done) {
		this.timeout(1000);

		var cache = new ActiveAsyncCache({
			interval: 10,
			maxAge: 100,
			load: function(key, callback) {
				callback(null, 1);
			}
		});

		cache.get('key', function(err, result) {
			if (err) throw err;
			assert.equal(result, 1);
			assert.equal(cache.length, 1);
			setTimeout(function() {
				assert.equal(cache.length, 0);
				done();
			}, 150);
		});
	});
});