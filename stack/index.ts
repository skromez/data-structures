import { DoublyLinkedList } from '../doubly-linked-list';

export class Stack<T> {
  private list = new DoublyLinkedList<T>()
  stack: T[] = []

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this.list.getSize()
  }

  public push(elem: T) {
    this.list.addLast(elem)
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error('empty stack')
    return this.list.removeLast();
  }

  public peek(): T {
    if (this.isEmpty()) throw new Error('empty stack')
    return this.list.peekLast();
  }
}

