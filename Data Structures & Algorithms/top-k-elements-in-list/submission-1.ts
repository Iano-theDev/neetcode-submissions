class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * O(nlogn)
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number, number>();
        for (const num of nums) {
            if(!map.get(num)) map.set(num, 1);
            else map.set(num, map.get(num)! + 1);
        }
        return [...map.keys()].sort((a, b) =>  map.get(b)! - map.get(a)!).slice(0, k);
    }
}
