/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */



//  HARD CODE WAY
const shortToUrl = {}
const urlToShort = {}
let num = 1

var encode = function(longUrl) {
    if (urlToShort[longUrl] === undefined) {
        const shortUrl = "http://tinyurl.com/" + num
        urlToShort[longUrl] = shortUrl
        shortToUrl[shortUrl] = longUrl
        num ++
    } 
    return urlToShort[longUrl]
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortToUrl[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */