function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    const compLookup = {}

    for (let i = 0; i < arr.length; i++) {
        const complement = limit - arr[i]
        if (compLookup[complement] !== undefined) {
            return [i, compLookup[complement]]
        }
        compLookup[arr[i]] = i
    }
    return []
}