'use strict';

import { expect } from 'chai'
import bluebird from 'bluebird'
import { customize as pfCustomize } from '../index.js'

const promiseFinite = pfCustomize(bluebird);



describe ( 'Bluebird Promise Library', () => {

it ( 'Promise is resolved', done => {
    promiseFinite ( 1000, 'expired', (resolve,reject) => {
                        resolve('success')
                    })
              .then ( x => {
                                expect (x).to.be.equal ('success', 'Bluebird promise is not resolved');
                                done()
                    })
            .catch ( err => {
                                console.log (err)
                                done()
                            })
 }) // it resolved



it ( 'Promise is timeouted', done => {
    promiseFinite ( 500, 'timeout', (resolve, reject) => {
                        // ... forget to resolve should trigger the timeout
               })
            .then ( x => {
                    expect (x).to.be.equal ('timeout', 'Bluebird promise was not timeouted');
                    done()
            })
            .catch ( err => {
                    console.log ( err )
                    done()
            })
}) // it not resolved
}) // describe


