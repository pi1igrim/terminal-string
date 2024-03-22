'use strict';
const Tstring = require('../main');

describe('Colorful Text', () => {
  test('Create w/o arguments', () => {
    const colored = new Tstring();
    const result = colored.toString();
    expect(result).toBe('');
  });

  test('normal text', () => {
    const colored = new Tstring('ABC');
    const result = colored.toString();
    expect(result).toBe('ABC');
  });

  test('bright text', () => {
    const colored = new Tstring();
    const expected = '\x1b[1mABC';
    const result = colored.bright('ABC').toString();
    expect(result).toBe(expected);
  });

  test('dim text', () => {
    const colored = new Tstring();
    const expected = '\x1b[2mABC';
    const result = colored.dim('ABC').toString();
    expect(result).toBe(expected);
  });

  test('bg color', () => {
    const colored = new Tstring();
    const expected = '\x1b[41mABC\x1b[0m';
    const result = colored.bg.red('ABC').reset().toString();
    expect(result).toBe(expected);
  });

  test('collect blocks to string', () => {
    const colored = new Tstring().bright('ABC').reset('DEF');
    const expected = '\x1b[1mABC\x1b[0mDEF';
    const result = colored.toString();
    expect(result).toBe(expected);
  });

  test('use iterator', () => {
    const colored = new Tstring().bright('ABC').reset('DEF');
    const expected = '\x1b[1mABC\x1b[0mDEF';
    const result = [...colored].join('');
    expect(result).toBe(expected);
  });

  test.skip('try', () => {
    const line = new Tstring()
      .bg.red('2021/12/01').reset(' ').reverse('Example').reset().toString();
    console.log(line);
  });
});
