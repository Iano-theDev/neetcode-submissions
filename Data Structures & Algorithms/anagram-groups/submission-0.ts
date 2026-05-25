class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let groupedMap: any = {};
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let sorted = str.split("").sort().join("");
            let propExists = Object.hasOwn(groupedMap, sorted);
            if (propExists) {
                groupedMap[sorted].push(str);
            } else {
                groupedMap[sorted] = [str];
            }
        }
        return Object.values(groupedMap);
    }
}
