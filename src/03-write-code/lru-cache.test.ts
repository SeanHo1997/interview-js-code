/**
 * @description LRU test
 */

import LRCUache from './lru-cache'

describe('LRU cache', () => {
  it('ge和set', () => {
    const lru = new LRCUache(2)
    lru.set(1,100)
    lru.set(2,200)
    expect(lru.get(1)).toBe(100)
  })

  it('set超出容量', () => {
    const lru = new LRCUache(2)
    lru.set(1,100)
    lru.set(2,200)
    lru.set(3,300)
    expect(lru.get(1)).toBeNull()
  })

  it('get超出容量', () => {
    const lru = new LRCUache(2)
    lru.set(1,100)
    lru.set(2,200)
    lru.get(1)
    lru.set(3,300)
    expect(lru.get(2)).toBeNull()
  })
})
