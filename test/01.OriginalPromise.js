import { describe, it, expect } from 'vitest'
import { standard as promiseFinite } from '../index.js'



describe ( 'Original Promise Library', () => {

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