
# `$ namly` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/namly.svg)](https://www.npmjs.com/package/namly) [![Downloads](https://img.shields.io/npm/dt/namly.svg)](https://www.npmjs.com/package/namly) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A tool for helping you to choose npm package names.

[![namly](http://i.imgur.com/zI93Tlz.png)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g namly
```


Then, run `namly --help` and see what the CLI tool can do.


```
$ namly --help
Usage: namly [options]

Options:
  -i, --input <keyword>  The package keyword.
  -h, --help             Displays this help.
  -v, --version          Displays version information.

Examples:
  namly -i name

Documentation can be found at https://github.com/IonicaBizau/namly#readme
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save namly
```



```js
const namly = require("namly");

// Generate a couple of package names related to "name"
namly("name", (err, data) => {
    console.log(err || data);
    // =>
    // [ { name: 'namy', available: false },
    //   { name: 'namer', available: false },
    //   { name: 'name2', available: true },
    //   { name: 'namify', available: false },
    //   { name: 'name-it', available: false },
    //   { name: 'name.js', available: true },
    //   { name: 'namous', available: true },
    //   { name: 'namly', available: true },
    //   { name: 'namance', available: true },
    //   { name: 'namoid', available: true },
    //   { name: 'namient', available: true },
    //   { name: 'nament', available: true },
    //   { name: 'namonin', available: true },
    //   { name: 'namoxin', available: true },
    //   { name: 'namo', available: true } ]
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
