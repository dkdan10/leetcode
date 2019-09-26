/**
 * @param {string[]} emails
 * @return {number}
 */
// ROUND 2 REGEX AND INDEX OF +
var numUniqueEmails = function (emails) {
    const emailSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        let [localName, domain] = emails[i].split("@")
        const plusIdx = localName.indexOf("+")
        if (plusIdx !== -1) {
            localName = localName.slice(0, plusIdx)
        }
        const emailString = localName.replace(/\./g, "") + "@" + domain
        if (!emailSet.has(emailString)) emailSet.add(emailString)
    }
    return emailSet.size
};

//  FIRST ATTEMPT
var numUniqueEmails = function (emails) {
    const emailSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        const emailPieces = emails[i].split("@")
        let localName = emailPieces[0]
        const domain = emailPieces[1]
        for (let j = 0; j < localName.length; j++) {
            const char = localName.charAt(j)
            if (char === ".") {
                localName = localName.slice(0, j) + localName.slice(j + 1)
                j--
            } else if (char === "+") {
                localName = localName.slice(0, j)
            }
        }
        const emailString = localName + "@" + domain
        if (!emailSet.has(emailString)) emailSet.add(emailString)
    }
    return emailSet.size
};