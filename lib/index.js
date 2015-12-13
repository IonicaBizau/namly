const nameIt = require("name-it")
    , available = require("npm-available-array")
    ;

/**
 * namly
 * Generates a set of names using [`name-it`](https://github.com/IonicaBizau/name-it)
 * and checks if they are available on the NPM registry using
 * [`npm-available-array](http://github.com/IonicaBizau/npm-available-array).
 *
 * @name namly
 * @function
 * @param {String} name A keyword to use for generating names.
 * @param {Function} callback The callback function.
 */
function namly(name, callback) {
    available(
        nameIt(name)._
      , callback
    );
}

module.exports = namly;
