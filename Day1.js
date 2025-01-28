// Two Sum

const nums = [3,2,4]
const target = 6

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return ([i, j])
            }
        }
    }

};

const answer = twoSum(nums, target)

console.log(answer)