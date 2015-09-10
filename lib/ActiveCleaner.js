function ActiveCleaner(opts) {
	this._intervalms = opts.interval;
	if (typeof this._intervalms === 'undefined') {
		this._intervalms = 5000;
	}
	this.start();
}

ActiveCleaner.prototype = {
	start: function() {
		if (this._active || !this._intervalms) return;
		var self = this;
		this._active = true;

		// randomize interval start time to spread out cleaning
		// when multiple caches are active
		this._timeout = setTimeout(function() {
			self._interval = setInterval(function() {
				self.clean();
			}, self._intervalms);
		}, self._intervalms * Math.random());
	},
	stop: function() {
		this._active = false;
		clearTimeout(this._timeout);
		clearInterval(this._interval);
	}
};

module.exports = ActiveCleaner;