const binarySearch = (arr, target) => {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high)/2)
        let guess = arr[mid]
        if (guess === target) {
            return mid
        } else if (guess > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null   
}

let array = [3,6,8,9,10]
console.log(binarySearch(array, 8));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 10));

