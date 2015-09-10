# active-cache
[![NPM version](http://img.shields.io/npm/v/active-cache.svg?style=flat)](https://www.npmjs.org/package/active-cache)
[![Build Status](http://img.shields.io/travis/naturalatlas/active-cache/master.svg?style=flat)](https://travis-ci.org/naturalatlas/active-cache)
[![Coverage Status](http://img.shields.io/codecov/c/github/naturalatlas/active-cache/master.svg?style=flat)](https://codecov.io/github/naturalatlas/active-cache)

This is a wrapper of [async-cache](https://www.npmjs.com/package/async-cache) and [lru-cache](https://www.npmjs.com/package/lru-cache) that provides active cache clearing at a specified time interval. This is useful in cases when you might have many caches, each potentially having very large items (buffers in particular). This should not be used for caches that contain many items (it loops over the keys).

```sh
$ npm install active-cache --save
```

### Sample Usage

```js
var ActiveAsyncCache = require('active-cache/async');
var ActiveSyncCache = require('active-cache/sync');

var cache = new ActiveSyncCache({interval: 5000, max: 100, maxAge: 1000*60*60});
var cache = new ActiveAsyncCache({interval: 5000, max: 100, maxAge: 1000*60*60, load: function(key, cb) { ... }});

// if the cache is no longer needed, make sure to stop the autocleaning so it can be freed
cache.stop()
```

## Contributing

Before submitting pull requests, please update the [tests](test) and make sure they all pass.

```sh
$ npm test
```

## License

Copyright &copy; 2015 [Natural Atlas, Inc.](https://github.com/naturalatlas) & [Contributors](https://github.com/naturalatlas/active-cache/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
