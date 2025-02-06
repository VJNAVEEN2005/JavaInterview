# 100 Days Of Challange

## Day 1 : Two Sum

```js
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const composite = target - nums[i]

        if (map.has(composite)) {
            return ([i, map.get(composite)])
        }
        map.set(nums[i], i)
    }

};
```

## Day 2 : Valid Parentheses

```js
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
```

## Day 3 : Merge Two Sorted List

```js
console.log("Hello World");
```

## Day 4 : Best Time to Buy and Sell Stock

```js
var maxProfit = function(prices) {
  let left = 0
  let righ = 1
  let maxProfitValue = 0
  while(righ<prices.length){
    if(prices[left]<prices[righ]){
        const profit = prices[righ]-prices[left]
        maxProfitValue = Math.max(profit,maxProfitValue)
    } else {
        left = righ
    }
    righ++
  }
  return maxProfitValue
};
```

## Day 5 : Valid Palindrome

```js
var isPalindrome = function(s) {
    const Clearstr = String(s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase())
    const reverse = Clearstr.split('').reverse().join('')
    return Clearstr === reverse
};
```

## Day 6 : Inverting Binary Tree

```js
var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};
```
