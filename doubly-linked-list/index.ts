export class DoublyLinkedList<T> {
  private size: number = 0;
  private head: Node<T> = null;
  private tail: Node<T> = null;


  // O(n)
  public clear(): void {
    let trav: Node<T> = this.head
    while (trav !== null) {
      const next: Node<T> = trav.next
      trav.prev = trav.next = null
      trav.data = null
      trav = next
    }
    this.head = this.tail = trav = null
    this.size = 0;
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.getSize() === 0
  }

  public add(elem: T): void {
    this.addLast(elem)
  }

  public addFirst(elem: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new Node<T>(elem, null, null)
    } else {
      this.head.prev = new Node<T>(elem, null, this.head)
      this.head = this.head.prev
    }
    this.size++
  }

  public addLast(elem: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new Node<T>(elem, null, null)
    } else {
      this.tail.next = new Node<T>(elem, this.tail, null)
      this.tail = this.tail.next
    }
    this.size++
  }

  public peekFirst(): T {
    if (this.isEmpty()) throw new Error('list is empty')
    return this.head.data
  }

  public peekLast(): T {
    if (this.isEmpty()) throw new Error('list is empty')
    return this.tail.data
  }

  public removeFirst(): T {
    if (this.isEmpty()) throw new Error('list is empty')
    const data = this.head.data
    this.head = this.head.next
    --this.size

    if (this.isEmpty()) {
      this.tail = null
    } else {
      this.head.prev = null
    }
    return data
  }

  public removeLast(): T {
    if (this.isEmpty()) throw new Error('list is empty')
    const data = this.tail.data;
    this.tail = this.tail.prev
    --this.size

    if (this.isEmpty()) {
      this.head = null
    } else {
      this.tail.next = null
    }
    return data
  }

  private removeInner(node: Node<T>): T {
    if (node.next === null) return this.removeLast()
    if (node.prev === null) return this.removeFirst()

    node.prev.next = node.next
    node.next.prev = node.prev

    const data = node.data
    node.data = null
    node.next = node.prev = null

    --this.size

    return data
  }

  public removeAt(index: number): T {
    let i: number;
    let trav: Node<T>
    if (index > this.size / 2) {
      for (i = this.size - 1, trav = this.tail; i !== index; i--) {
        trav = trav.prev
      }
    } else {
      for (i = 0, trav = this.head; i !== index; i++) {
        trav = trav.prev
      }
    }
    const data = trav.data
    this.removeInner(trav);
    return data
  }

  public remove(data: T): boolean {
    let trav: Node<T>
    for (trav = this.head; trav != null; trav = trav.next) {
      if (data === trav.data) {
        this.removeInner(trav)
        return true
      }
    }
    return false
  }

  public indexOf(elem: T): number {
    let trav = this.head
    let i = 0;
    for (trav; trav.data !== elem; trav = trav.next, i++) {
      if (trav.next === null) return -1
    }
    return i
  }

  public contains(elem: T): boolean {
    return this.indexOf(elem) !== -1
  }

  public toString(): string {
    let str = '[';
    let trav = this.head
    while (trav) {
      str += `${trav.data}${trav.next ? ', ' : ''}`
      trav = trav.next
    }
    return str + "]"
  }

  // [Symbol.iterator]() {
  //   let trav = this.head
  //   return {
  //     next: () => {
  //       if (trav == null) {
  //         return {
  //           done: true
  //         }
  //       }
  //       const value = trav.data
  //       trav = trav.next
  //       return {
  //         value,
  //         done: false
  //       }
  //     }
  //   }
  // }
}

class Node<T> {
  data: T
  next: Node<T>
  prev: Node<T>

  constructor(data: T, prev: Node<T>, next: Node<T>) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export {}
