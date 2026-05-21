class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // sort the array
        // let sorted = nums.sort();
        let temp = [];

        for (let i = 0; i < nums.length; i++) {
            // if (sorted[i] == sorted[i + 1]) {
            //     return true;
            // }
            if (temp.includes(nums[i])) {
                return true;
            }
            temp.push(nums[i]);
        }
        return false;
    }
}
