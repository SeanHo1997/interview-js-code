/**
 * @description lur最新使用内存
 */
export default class LURCache {
    private length: number
    private cacheContent: Map<any, any> = new Map()

    constructor(length: number) {
        if (length < 1) throw new Error('invalid length')
        // this.cacheContent = cacheContent
        this.length = length
    }

    set(key: any, val: any) {
        if (this.cacheContent.size >= this.length) {
            // 如果超出了容量
            const oldestKey = this.cacheContent.keys().next().value
            this.cacheContent.delete(oldestKey)
            this.cacheContent.set(key, val)
        } else if (this.cacheContent.has(key)) {
            // 如果key已存在
            this.cacheContent.delete(key)
            this.cacheContent.set(key, val)
        } else {
            this.cacheContent.set(key, val)
        }
    }

    get(key: any): any {
        if (!this.cacheContent.has(key)) return null
        const value = this.cacheContent.get(key)
        // lur特性: 放到最前面
        this.cacheContent.delete(key)
        this.cacheContent.set(key, value)
        return value
    }
}

const lurCache = new LURCache(2)
lurCache.set(1, 1)
console.log(lurCache)
lurCache.set(2, 2)
console.log(lurCache)
// console.log(lurCache.get(1))
lurCache.set(3, 3)
console.log(lurCache)
lurCache.get(2)
console.log(lurCache)
