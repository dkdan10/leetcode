/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */

// BEST>>> NO SORTING
var findLongestWord = function(s, d) {
    let mx = '';
    for (let word of d){
        let i = 0, j = 0;
        while (i < s.length && j < word.length){
            if (s[i] == word[j]){
                i++;
                j++;
            } else {
                i++;   
            }
        }
        if (j >= word.length){
            if (word.length > mx.length)
                mx = word;
            else if (word.length == mx.length && mx.localeCompare(word) > 0)
                mx = word;
        }
            
    }
    return mx;
};

// O(nlog(n)) + O(d.length * s.length)
var goodFindLongestWord = function(s, d) {
    d.sort((a, b) => {
      if (a.length !== b.length) {
          return b.length - a.length;
      }
      return a.localeCompare(b);
    });
  
    for (let word of d) {
      let index = -1;
      for (let c of word) {
        index = s.indexOf(c, index + 1);
        if (index < 0) break;
      }
      if (index >= 0) return word;
    }
  
    return '';
  };