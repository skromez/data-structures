import { Stack } from './index';

const bracketSequences = [
  '[[]](){}',
  '[]]()}',
  '[](){}',
  '[]((())){}',
  '](([(]])}',
  '[[[[[[[]]]]]]]',
]

const validateBrackets = (str: string): boolean => {
  const stack = new Stack<string>()
  const strArray = str.split('')
  for (let i = 0; i < strArray.length; i++) {
    const char = strArray[i]
    const revBracket = getReversedBracket(char);
    if (isLeftBracket(char)) {
      stack.push(char)
    } else if (stack.isEmpty() || stack.pop() != revBracket) {
      return false
    }
  }
  return stack.isEmpty()
}

console.log(bracketSequences.map(validateBrackets));

function isLeftBracket(char: string): boolean {
  switch (char) {
    case "(":
    case "[":
    case "{":
      return true
    default:
      return false
  }
}

function getReversedBracket(char: string): string {
  switch (char) {
    case "(":
      return ")"
    case ")":
      return "("
    case "[":
      return "]"
    case "]":
      return "["
    case "{":
      return "}"
    case "}":
      return "{"
    default:
      return null
  }
}
