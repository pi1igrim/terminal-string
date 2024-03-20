'use strict';

class Block {
  #text;
  #color;
  constructor(text = '', color = '') {
    this.#text = text;
    this.#color = color;
    this.next = null;
  }

  get color() {
    return this.#color;
  }

  get text() {
    return this.#text;
  }

  toString() {
    return this.color + this.text;
  }
}
module.exports = Block;
