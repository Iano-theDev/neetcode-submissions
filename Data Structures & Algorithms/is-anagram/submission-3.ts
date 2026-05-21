class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false
        let sSorted = s.split('').sort();
        let tSorted = t.split('').sort();
        for (let i = 0; i < sSorted.length; i++) {
            if (tSorted[i] == sSorted[i]) {
                continue
            } else {
                return false
            }
        }
        return true;
    }
}
