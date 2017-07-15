function promiseFiniteBase ( PromiseLib, ttl, expireMsg='expire', promiseFn ) {
    let timer;   
    const mainPromise = new PromiseLib ( promiseFn );
    const timeout     = new PromiseLib ( (resolve, reject) => {
                                                        timer = setTimeout ( () => {
                                                                                      resolve ( expireMsg );
                                                                                      PromiseLib.resolve ( mainPromise);
                                                                    }, ttl );
                               }) // timeout

    mainPromise.then ( () => clearTimeout(timer)   )
    return PromiseLib.race ([mainPromise,timeout])
} // promiseFiniteBase func.

const default_Promise_Library = promiseFiniteBase.bind (null, Promise);
const load_Custom_Promises = (PromiseLib = Promise) => promiseFiniteBase.bind (null, PromiseLib);



// * Official API
const API = {
      default   : default_Promise_Library // promiseFinite function with native Promise build in.
    , customize : load_Custom_Promises    // returns promiseFinite function with provided Promise library.
  }

module.exports = API


