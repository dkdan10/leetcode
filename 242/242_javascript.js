/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  BEST APROACH
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const check = new Array(26).fill(0)
    const alph = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}
    for (let i = 0; i < s.length; i ++) {
        check[alph[s.charAt(i)]]++
        check[alph[t.charAt(i)]]--
    }
    return check.every(el => el === 0)
};


// FIRST APPROACH
var okayIsAnagram = function(s, t) {
    if (s.length !== t.length) return false
//     build s key
    const charKey = {}
    for (let i = 0; i < s.length; i ++) {
        const char = s.charAt(i)
        if (charKey[char] === undefined) charKey[char] = 0
        charKey[char] ++
    }
    for (let i = 0; i < s.length; i ++) {
        const char = t.charAt(i)
        if (charKey[char] === undefined) return false
        charKey[char]--
        if (charKey[char] < 0) return false
    }
    return Object.values(charKey).every(el => el === 0)
};