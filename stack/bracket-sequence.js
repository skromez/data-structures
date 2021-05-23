"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var bracketSequences = [
    '[[]](){}',
    '[]]()}',
    '[](){}',
    '[]((())){}',
    '](([(]])}',
    '[{[[[[[[]}]]]]]]',
];
var validateBrackets = function (str) {
    var stack = new index_1.Stack();
    var strArray = str.split('');
    for (var i = 0; i < strArray.length; i++) {
        var char = strArray[i];
        var revBracket = getReversedBracket(char);
        if (isLeftBracket(char)) {
            stack.push(char);
        }
        else if (stack.isEmpty() || stack.pop() != revBracket) {
            return false;
        }
    }
    return stack.isEmpty();
};
console.log(bracketSequences.map(validateBrackets));
function isLeftBracket(char) {
    switch (char) {
        case "(":
        case "[":
        case "{":
            return true;
        default:
            return false;
    }
}
function getReversedBracket(char) {
    switch (char) {
        case "(":
            return ")";
        case ")":
            return "(";
        case "[":
            return "]";
        case "]":
            return "[";
        case "{":
            return "}";
        case "}":
            return "{";
        default:
            return null;
    }
}
