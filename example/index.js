const namly = require("../lib");

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
