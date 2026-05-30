class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for (const str of strs) {
            let len = str.length;
            let word = String(len) + "#" + str;
            res = res + word;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let words = [];
        for (let i = 0; i < str.length; i++) {
            let j = str.indexOf("#", i);
            let len = Number(str.slice(i, j));
            let start = j + 1;
            let end = start + len
            let word  = str.slice(start, end);
            words.push(word)
            i = end - 1
        }
        return words
    }
}
