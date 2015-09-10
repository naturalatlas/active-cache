var ActiveCleaner = require('./ActiveCleaner.js');
var LRU = require('lru-cache');
var extend = require('extend');
var noop = function() {};

function ActiveCacheSync(opts) {
	this.cache = new LRU(opts);
	ActiveCleaner.call(this, opts);
}

ActiveCacheSync.prototype = extend({}, ActiveCleaner.prototype, {
	clean: function() {
		return this.cache.forEach(noop);
	},
	reset: function() {
		return this.cache.reset();
	},
	set: function(key, val, maxAge) {
		return this.cache.set(key, val, maxAge);
	},
	get: function(key) {
		return this.cache.get(key);
	},
	keys: function() {
		return this.cache.keys();
	}
});

Object.defineProperty(ActiveCacheSync.prototype, 'length', {
	get: function () { return this.cache.length },
	enumerable : true
});

module.exports = ActiveCacheSync;