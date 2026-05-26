class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * O(n.k log k)
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = {};
        for (const str of strs) {
            let sorted = str.split('').sort().join('');
            if (!map[sorted]) map[sorted] = [str];
            else map[sorted].push(str);
        }
        return Object.values(map)
    }
}
