'use strict';

import { expect } from 'chai'
import { standard as promiseFinite } from '../index.js'



describe ( 'Original Promise Library', () => {

it ( 'Promise is resolved', done => {

    promiseFinite ( 1000, 'expired', (resolve,reject) => {
                        resolve('success')
                    })
              .then ( x => {
                                expect (x).is.equal ('success', 'Promise was not resolved');
                                done()
                    })
            .catch ( err => {
                         console.log (err)
                         done ()
                    })
 }) // it resolved



it ( 'Promise is timeouted', done => {
    promiseFinite ( 500, 'timeout', (resolve, reject) => {
                        // ... forget to resolve should trigger the timeout
                  })
            .then ( x => {
                    expect (x).to.be.equal ('timeout', 'Promise was not timeouted');
                    done()
                  })
          .catch ( err => {
                         console.log (err)
                         done ()
                    })
}) // it not resolved


}) // describe


