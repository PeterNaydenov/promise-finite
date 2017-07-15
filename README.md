# Promise-finite

Promise with ttl. Works well with standard and Bluebird promises.

Standard promise will live forever. Not resolving/rejecting them will create a memory leaks. Promise-finite is a promise with ttl (time-to-live). When ttl expires promise will be resolved with a provided message that will help you to alocate the forgotten promise.

```js
  promiseFinite ( ttl, "expireMsg", promiseFn )

```
Where **ttl** {number} is a time to live in milliseconds, **expireMsg**{string} is a string that will be received as a result if timeout was triggered and **promiseFn** is a standard promise function that receives (resolve,reject) as arguments.



## Installation

Install by writing in your terminal:

```
npm install promise-finite --save

```

Load standard promise library:

```js
const promiseFinite = require('promise-finite').default;

```

Load with bluebird or other promise library that implements standard interface:

```js
const bluebird = require ('bluebird')
const promiseFinite = require('promise-finite').customize( bluebird )
```

## Examples

### Simple promise with ttl

```js

promiseFinite ( 3000, "exp", (resolve,reject) => {
        console.log("Starting a promise");
        // ...without 'resolve' promiseFinite will trigger the timeout after 3s 
 })
 .then ( result => {
          // on timeout result will have string value 'exp'
          if ( result === 'exp' )  // do something if timeout
          else                     // execute normal program flow...
})
```


## Known bugs
_(Nothing yet)_





## Release History

### 1.0.0 (2017-07-15)

- [x] Node.js module;
- [x] Test package;





## Credits
'promise-finite' was created by Peter Naydenov.




## License
'promise-finite' is released under the [MIT License](http://opensource.org/licenses/MIT).