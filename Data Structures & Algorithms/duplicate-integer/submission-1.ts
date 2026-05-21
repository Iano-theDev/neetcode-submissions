class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // sort the array
        let sorted = nums.sort();

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] == sorted[i + 1]) {
                return true;
            }
        }
        return false
    }
}
