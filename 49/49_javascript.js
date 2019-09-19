/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// O(NK) But is slower than better aproach? 
var groupAnagrams = function(strs) {
    const alphabet = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}
    
    const groupGram = {}
    strs.forEach((s) => {
        const count = Array.from({length: 26}, () => 0)
        for (let i = 0; i < 26; i++) count[alphabet[s.charAt(i)]]++
        let key = ""
        for (let i = 0; i < 26; i++) key += `#${count[i]}`
        if (!groupGram[key]) groupGram[key] = []
        groupGram[key].push(s)
    })
    return Object.values(groupGram)
};

// BETTER APPROACH O(NKlogK) K is length of longest string N is number of strings
var betterGroupAnagrams = function(strs) {
    const groupGram = {}
    strs.forEach((s) => {
        const sortedKey = s.split("").sort().join("")
        if (!groupGram[sortedKey]) groupGram[sortedKey] = []
        groupGram[sortedKey].push(s)
    })
    return Object.values(groupGram)
};

// NAIVE APPROACH
var naiveGroupAnagrams = function(strs) {
    const groupGram = []
    strs.forEach((el) => {
        let added = false
        for (let i = 0; i < groupGram.length; i ++) {
            if (!added && groupGram[i][0].split("").sort().join("") === el.split("").sort().join("")) {
                groupGram[i].push(el)
                added = true
            }
        }
        if (!added) groupGram.push([el])
    })
    return groupGram
};


// INSANE SOLUTION, NOT MINE:
if(strs.length == 0) return [];
const result = new Map();
const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];
const getKey = str => {
    let key = 1;
    for(let i = 0; i < str.length; i++){
        key =  primes[str.charCodeAt(i) - 97] * key;
    }
    return key;
}
strs.forEach(w => {
    let key = getKey(w);
    if(result.has(key)) {
        result.get(key).push(w);
    } else {
        result.set(key,  [w]);
    }
   
});
return [...result.values()];
