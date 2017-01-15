'use strict';

const path = require('path');
const _root = path.resolve(__dirname, '..');
const root = (...args) => path.join.apply(path, [_root].concat(args));
exports.root = root;
