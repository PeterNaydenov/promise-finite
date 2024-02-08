function promiseFiniteBase ( PromiseLib, ttl, expireMsg='expire', promiseFn ) {
    let timer, close;

    const mainPromise = new PromiseLib ( (resolve,reject) => {
                                              close = resolve
                                              return promiseFn(resolve,reject)
                                      })
                                  .catch ( () => clearTimeout(timer)   )
    const timeout = new PromiseLib ( resolve => {
                                          timer = setTimeout ( () => {
                                                                        resolve ( expireMsg )
                                                                        close ( null )
                                                      }, ttl );
                               }) // timeout

    mainPromise.then ( () => clearTimeout(timer))
    return PromiseLib.race ([mainPromise,timeout])
} // promiseFiniteBase func.



const 
      default_Promise_Library = promiseFiniteBase.bind (null, Promise )
    , load_Custom_Promises = (PromiseLib = Promise) => promiseFiniteBase.bind (null, PromiseLib )
    ;



// * Official API
export { default_Promise_Library as standard  }   // promiseFinite function with native Promise build in.
export { load_Custom_Promises    as customize }   // returns promiseFinite function with provided Promise library.


