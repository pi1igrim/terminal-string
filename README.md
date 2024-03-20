# terminal-string

Adding color effects to a terminal string

## Installation

``` ssh
npm i terminal-string -D
  or
yarn add terminal-string -D
```

## Usage

``` js
const line = new Tstring()
  .bg.red('2021/12/01').reset(' ').reverse('Test 1').reset().toString();
console.log(line);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

### Specification

- Text Effects
  > normal(): continue shows text without setting color effects;
  > reset(): clears all formatting. Sure that you call it at the end of using the terminal;
  > bright(): displays text with the bright effect;
  > dim(): displays text with the dim effect;
  > underscore(): display text with underscore;
  > blink(): displays text with the blink effect;
  > reverse(): changes background and foreground colors to opposite ones;
  > hidden(): displays text with the hidden effect;
- Foreground (text) colors
  > fg.black()
  > fg.red()
  > fg.green()
  > fg.yellow()
  > fg.blue()
  > fg.magenta()
  > fg.cyan()
  > fg.white()
  > fg.crimson()

- Background colors
  > bg.black()
  > bg.red()
  > bg.green()
  > bg.yellow()
  > bg.blue()
  > bg.magenta()
  > bg.cyan()
  > bg.white()
  > bg.crimson()

## History

* v1.0.0: Implemented simple syntax.

## License

MIT
