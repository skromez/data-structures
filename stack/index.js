"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var doubly_linked_list_1 = require("../doubly-linked-list");
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = new doubly_linked_list_1.DoublyLinkedList();
        this.stack = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Stack.prototype.size = function () {
        return this.list.getSize();
    };
    Stack.prototype.push = function (elem) {
        this.list.addLast(elem);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            throw new Error('empty stack');
        return this.list.removeLast();
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            throw new Error('empty stack');
        return this.list.peekLast();
    };
    return Stack;
}());
exports.Stack = Stack;
