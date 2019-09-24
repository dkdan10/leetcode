function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

    // your code goes here
    let indexOfZero = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[indexOfZero]] = [arr[indexOfZero], arr[i]]
            indexOfZero++
        }
    }
    return arr
}