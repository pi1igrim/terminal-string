'use strict';
const colors = require('../src/colors');
const Block = require('../src/block');

describe('Text', () => {
  test('Create empty block', () => {
    const block = new Block();
    const expected = '';
    const result = block.toString();
    expect(result).toBe(expected);
  });

  test('normal text', () => {
    const block = new Block(' abc', colors.reset);
    const expected = '\x1b[0m abc';
    const result = block.toString();
    expect(result).toBe(expected);
  });

  test('bright text', () => {
    const block = new Block(' abc', colors.bright);
    const expected = '\x1b[1m abc';
    const result = block.toString();
    expect(result).toBe(expected);
  });
});
