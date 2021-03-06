class DynamicArray<T> {
  private array: T[]
  private len: number = 0;
  private capacity: number

  constructor(capacity: number = 1) {
    if (capacity < 0 ) throw new Error(`Illegal capacity: ${capacity}`)
    this.capacity = capacity
    this.array = Array<T>(capacity)
  }

  public size(): number {
    return this.len
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public get(index: number): T {
    return this.array[index]
  }

  public set(index: number, elem: T): void {
    this.array[index] = elem
  }

  public clear(): void {
    for (let i = 0; i < this.capacity; i++) {
      this.array[i] = null
    }
    this.len = 0;
  }

  public add(elem: T) {
    if (this.len + 1 >= this.capacity) {
      this.capacity === 0 ? this.capacity = 1 : this.capacity *= 2;
      const newArray = Array<T>(this.capacity)
      for (let i = 0; i < this.len; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
    this.array[this.len++] = elem
  }

  public removeAt(rmIndex: number): T {
    if (rmIndex > this.len && rmIndex < 0) throw new Error('index out of bounds')
    const data: T = this.array[rmIndex];
    const newArray = Array<T>(this.len - 1)
    for (let i = 0, j = 0; i < this.len; i++, j++) {
      i === rmIndex ? j-- : newArray[j] = this.array[i]
    }
    this.array = newArray
    this.capacity = --this.len
    return data
  }

  public remove(elem: T): boolean {
    for (let i = 0; i < this.len; i++) {
      if (this.array[i] === elem) {
        this.removeAt(i)
        return true
      }
    }
    return false
  }

  public indexOf(elem: T): number {
    for (let i = 0; i < this.len; i++) {
      if (this.array[i] === elem) return i
    }
    return -1
  }

  public contains(elem: T): boolean {
    return this.indexOf(elem) !== -1
  }

  public toString(): string {
    if (this.len === 0) return '[]'
    let str = '['
    for (let i = 0; i < this.len; i++) {
      const splitter = ', '
      str += `${this.array[i]}` + (this.len == i + 1 ? '' : splitter)
    }
    return str + "]"
  }
}
