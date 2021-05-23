import { DoublyLinkedList } from '../doubly-linked-list';

export class Queue<T> {
  private list: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  public offer(elem: T): void {
    this.list.addLast(elem)
  }

  public poll(): T {
    if (this.isEmpty()) throw new Error('queue is empty')
    return this.list.removeFirst()
  }

  public peek(): T {
    if (this.isEmpty()) throw new Error('queue is empty')
    return this.list.peekFirst()
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this.list.getSize()
  }
}
