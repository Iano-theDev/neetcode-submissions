class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap = {};
        for (let idx = 0; idx < nums.length; idx++) {
            let diff = target - nums[idx];
            if (diff in hashMap) {
                return [hashMap[diff], idx];
            }
            hashMap[nums[idx]] = idx;
        }
    }
}
