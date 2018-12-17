export default class ReactiveSet<T> {
    private set!: Set<T>
    private tracker: number = 0

    constructor (values?: ReadonlyArray<T> | null) {
      if (values) this.set = new Set<T>(values)
      else this.set = new Set<T>()
    }

    get rawSet (): Set<T> {
      let tracker = this.tracker
      return this.set
    }

    values (): IterableIterator<T> {
      return this.rawSet.values()
    }

    keys (): IterableIterator<T> {
      return this.rawSet.keys()
    }

    entries (): IterableIterator<[T, T]> {
      return this.rawSet.entries()
    }

    has (value: T): boolean {
      return this.rawSet.has(value)
    }

    forEach (callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
      this.rawSet.forEach(callbackfn, thisArg)
    }

    delete (value: T): boolean {
      let ret = this.rawSet.delete(value)
      if (ret) this.tracker++
      return ret
    }

    clear (): void {
      this.rawSet.clear()
      this.tracker++
    }

    add (value: T): this {
      if (this.has(value)) return this
      this.rawSet.add(value)
      this.tracker++
      return this
    }
}
