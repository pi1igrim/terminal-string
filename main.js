'use strict';
const colors = require('./src/colors');
const Block = require('./src/block');

function Tstring(text) {
  const block = text ? new Block(text) : null;
  this._handle = this._last = block;

  const fns = this._collectFunctions(colors);
  Tstring.prototype = Object.assign(Tstring.prototype, fns);

  Tstring.prototype.normal = this._createFunction();
}

Tstring.prototype._collectFunctions = function (colorSource) {
  const result = {};
  for (const [name, value] of Object.entries(colorSource)) {
    result[name] = (typeof value === 'object') ?
      this._collectFunctions(colorSource[name]) :
      this._createFunction(value);
  }
  return result;
};

Tstring.prototype._createFunction = function (color = '') {
  return text => {
    const block = new Block(text, color);
    return this._add(block);
  };
};

Tstring.prototype._add = function (block) {
  if (!this._handle) {
    this._handle = block;
  }
  if (this._last) {
    this._last.next = block;
  }
  this._last = block;
  return this;
};

Tstring.prototype[Symbol.iterator] = function*() {
  let current = this._handle;
  while (current) {
    yield current;
    current = current.next;
  }
};

Tstring.prototype.toString = function () {
  return [...this].join('');
};

module.exports = Tstring;
