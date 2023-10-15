const inputBox = document.getElementById("inputBox");
const postFixBtn = document.getElementById("postfix");
const preFixBtn = document.getElementById("prefix");
const outputBox = document.getElementById("outputBox");
const clearBtn = document.getElementById("clear");

postFixBtn.addEventListener("click", () => {
    outputBox.innerHTML = "";
    let input = inputBox.value;
    if (isValidExpression(input)) {
        const postfixExpression = infixToPostfix(input);
        outputBox.innerHTML = postfixExpression;
        outputBox.style.display = "block";
    } else {
        outputBox.innerHTML = "Invalid input. Please check your expression.";
        outputBox.style.display = "block";
    }
});

preFixBtn.addEventListener("click", () => {
    outputBox.innerHTML = "";
    let input = inputBox.value;
    if (isValidExpression(input)) {
        const prefixExpression = infixToPrefix(input);
        outputBox.innerHTML = prefixExpression;
        outputBox.style.display = "block";
    } else {
        outputBox.innerHTML = "Invalid input. Please check your expression.";
        outputBox.style.display = "block";
    }
});

clearBtn.addEventListener("click", () => {
    inputBox.value = "";
    outputBox.innerHTML = "";
});

function isValidExpression(expression) {
  const stack = [];

  for (let char of expression) {
      if (char === '(') {
          stack.push(char);
      } else if (char === ')') {
          if (stack.pop() !== '(') {
              return false; // Mismatched parentheses
          }
      } else if (!/^[a-zA-Z0-9\+\-\*\/\^()]+$/.test(char)) {
          return false; // Invalid character detected
      }
  }

  return stack.length === 0; // If the stack is empty, all parentheses matched
}

// infix to postfix - infix to prefix


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

function isOperator(character) {
  return ['+', '-', '*', '/', '^'].includes(character);
}

function getPrecedence(operator) {
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    case '^':
      return 3;
    default:
      return 0;
  }
}

function infixToPostfix(infix) {
  const output = [];
  const operatorStack = new Stack();

  for (let i = 0; i < infix.length; i++) {
    const char = infix[i];

    if (char.match(/[a-zA-Z0-9]/)) {
      output.push(char);
    } else if (isOperator(char)) {
      while (
        !operatorStack.isEmpty() &&
        getPrecedence(operatorStack.peek()) >= getPrecedence(char)
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.push(char);
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== '(') {
        output.push(operatorStack.pop());
      }
      operatorStack.pop(); 
    }
  }

  while (!operatorStack.isEmpty()) {
    output.push(operatorStack.pop());
  }

  return output.join('');
}

function infixToPrefix(infix) {
  infix = infix.split('').reverse().join('');

  infix = infix.replace(/\(/g, 'temp');
  infix = infix.replace(/\)/g, '(');
  infix = infix.replace(/temp/g, ')');

  const output = [];
  const operatorStack = new Stack();

  for (let i = 0; i < infix.length; i++) {
    const char = infix[i];

    if (char.match(/[a-zA-Z0-9]/)) {
      output.push(char);
    } else if (isOperator(char)) {
      while (
        !operatorStack.isEmpty() &&
        getPrecedence(operatorStack.peek()) >= getPrecedence(char)
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.push(char);
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== '(') {
        output.push(operatorStack.pop());
      }
      operatorStack.pop(); 
    }
  }

  while (!operatorStack.isEmpty()) {
    output.push(operatorStack.pop());
  }

  return output.reverse().join('');
}

