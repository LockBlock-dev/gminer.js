# GMiners.js

Made with [![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/gminers.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/gminers.js.svg)](https://github.com/LockBlock-dev/gminers.js/stargazers)

gminers.js is a Node.js module that allows you to easily interact with the GMiners API.

• Promise based

• Performant

• 100% coverage of the GMiners API


## Installation

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

With GitHub :

• Download the project or clone it

• Go to the gminers.js folder and do `npm install`

• Require the [index.js](/index.js)

With NPM :

• Download the project

• Do `npm install gminers.js`

• Require the library


## Documentation

See the [API documentation](/API.md).


## Example usage

### Using the library

```js
const { Client } = require("gminers.js")

const client = new Client(port) //example : 5555 (must be a number)

client.stats().then(data => {
    console.log(data)
})

//OR

const myFunc = async () => {
    const data = await client.stats()
    console.log(data)
}

myFunc()
```

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)


## Credits

[GMiners](https://github.com/develsoftware/GMinerRelease)


## Copyright

See the [license](/LICENSE)