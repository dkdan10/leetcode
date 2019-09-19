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