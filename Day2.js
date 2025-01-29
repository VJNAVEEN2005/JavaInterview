// Valid Parentheses

const s = "()[]{}"

var isValid = function (s) {

    const stack = new Array();
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);


    for (i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            stack.push(s[i])
        } else {
            if (stack.length === 0 || map.get(stack.pop()) !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0


}


console.log(isValid(s))

