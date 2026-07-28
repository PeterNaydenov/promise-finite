import { describe, it, expect } from 'vitest'
import bluebird from 'bluebird'
import { customize as pfCustomize } from '../index.js'

const promiseFinite = pfCustomize(bluebird);



describe ( 'Bluebird Promise Library', () => {

it ( 'Promise is resolved', async () => {
    const x = await promiseFinite ( 1000, 'expired', (resolve,reject) => {
                        resolve('success')
                    })
    expect (x).toBe ('success')
 }) // it resolved



it ( 'Promise is timeouted', async () => {
    const x = await promiseFinite ( 500, 'timeout', (resolve, reject) => {
                        // ... forget to resolve should trigger the timeout
               })
    expect (x).toBe ('timeout')
}) // it not resolved
}) // describe