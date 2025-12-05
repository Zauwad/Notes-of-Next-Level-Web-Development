// Problem Statement: Valid Parentheses

import Stack from "./stack.js"

// You are given a string consisting only of the characters: (, ), {, }, [, ]
// Determine if the string is valid. A string is valid if:
// Open brackets are closed by the same type.
// Open brackets are closed in the correct order.

// Input	Output
// "()"	    true
// "()[]{}"	true
// "(]"	    false
// "([)]"	false
// "{[]}"	true

const bracketChecker = (str) => {
    const stack = new Stack() //! created stack from another imported file
    const bracketClosingData = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(' || char === '{' || char === '[') { //! add in stack for bracket opening
            stack.push(char)
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.isEmpty() || stack.pop() != bracketClosingData[char]) { //! if no bracket opening in stack and stack pop returns popped element(latest item in stack), if that element and bracketclosingdata's key's value doesnt match
                return false
            }
        }
    }
    return stack.isEmpty() //! if stack empty that means all bracket openings have been dealt with 
}

console.log(bracketChecker('()}'))