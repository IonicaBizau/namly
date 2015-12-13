# `$ namly` [![Support this project][donate-now]][paypal-donations]

A tool for helping you to choose npm package names.

[![namly](http://i.imgur.com/zI93Tlz.png)](#)

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g namly
```

Then, run `namly --help` and see what the CLI tool can do.

```sh
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

## Example

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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md