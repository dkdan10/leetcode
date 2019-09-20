/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  MY WAY:
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    const s2t = {}
    const t2s = {}
    for (let i = 0; i < s.length; i++) {
        const sChar = s.charAt(i)
        const tChar = t.charAt(i)
        if (s2t[sChar] !== undefined && s2t[sChar] !== tChar) return false
        if (t2s[tChar] !== undefined && t2s[tChar] !== sChar) return false
        s2t[sChar] = tChar
        t2s[tChar] = sChar
    }
    return true
};

// OTHER WAY:
var isIsomorphic = function(s, t) {
    if(s===t) return true;
    var lens= s.length;
    var i=1;
    if(lens!== t.length) return false;
    while(i<lens){
       if(s.indexOf(s[i])===t.indexOf(t[i])){
          i++;
       }else{
          break;
       }
    }
    return i === lens;
};