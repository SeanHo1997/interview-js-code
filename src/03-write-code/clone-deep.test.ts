import { cloneDeep } from "./clone-deep";

describe('深拷贝', () => {
  it('值类型', () => {
    expect(cloneDeep(100)).toBe(100)
    expect(cloneDeep('abc')).toBe('abc')
    expect(cloneDeep(null)).toBe(null)
  })
  it('普通对象和数组', () => {
    const obj = {
      name: 'sean',
      age: 26,
      arr: [1,2,3],
      info: {
        height: 175,
        weight: 75
      }
    }

    const obj1 = cloneDeep(obj)

    expect(obj1.info.height).toBe(175)
    expect(obj1.arr).toEqual([1,2,3])
  })
  it('Map', () => {
    const m1 = new Map([['x', 1], ['y', 2]])
    const m2 = cloneDeep(m1)
    expect(m2.size).toBe(2)

    const obj = {
      map: new Map([['x', 1], ['y', 2]])
    }
    const obj1 = cloneDeep(obj)
    expect(obj1.map.size).toBe(2)
  })
  it('Set', () => {
    const s1 = new Set([1,2,3])
    const s2 = cloneDeep(s1)
    expect(s2.size).toBe(2)

    const obj = {
      s: new Set([1,2,3])
    }
    const obj1 = cloneDeep(obj)
    expect(obj1.s.size).toBe(3)
  })
  it('循环引用', () => {
    const a: any = {}
    a.self = a

    const b = cloneDeep(a)
    expect(b.self).toBe(b)
  })
})
