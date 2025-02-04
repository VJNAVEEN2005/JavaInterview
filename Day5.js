// Valid Palindrome

const s = "01helleh , 10"

var isPalindrome = function(s) {
    const Clearstr = String(s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase())
    const reverse = Clearstr.split('').reverse().join('')
    return Clearstr === reverse
};

console.log(isPalindrome(s))