// Two Sum

const nums = [3, 2, 4]
const target = 6

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

const answer = twoSum(nums, target)

console.log(answer)