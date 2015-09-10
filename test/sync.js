var ActiveSyncCache = require('../sync.js');
var assert = require('chai').assert;

describe('sync', function() {
	it('should operate normally', function(done) {
		this.timeout(1000);

		var cache = new ActiveSyncCache({
			interval: 10,
			maxAge: 100
		});

		cache.set('key', 1);
		assert.equal(cache.get('key'), 1);
		assert.equal(cache.length, 1);
		setTimeout(function() {
			assert.equal(cache.length, 0);
			done();
		}, 150);
	});
});