
# `$ namly`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/namly.svg)](https://www.npmjs.com/package/namly) [![Downloads](https://img.shields.io/npm/dt/namly.svg)](https://www.npmjs.com/package/namly)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
