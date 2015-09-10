var ActiveCleaner = require('./ActiveCleaner.js');
var AsyncCache = require('async-cache');
var extend = require('extend');
var noop = function() {}

function ActiveCacheAsync(opts) {
	this.cache = new AsyncCache(opts);
	ActiveCleaner.call(this, opts);
}

ActiveCacheAsync.prototype = extend({}, ActiveCleaner.prototype, {
	clean: function() {
		return this.cache._cache.forEach(noop);
	},
	reset: function() {
		return this.cache.reset();
	},
	set: function(key, val) {
		return this.cache.set(key, val);
	},
	get: function(key, cb) {
		return this.cache.get(key, cb);
	},
	keys: function() {
		return this.cache._cache.keys();
	}
});

Object.defineProperty(ActiveCacheAsync.prototype, 'length', {
	get: function () { return this.cache._cache.length },
	enumerable: true
});

module.exports = ActiveCacheAsync;