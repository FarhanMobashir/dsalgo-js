
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break;
            }
        }
    }
    return arr;
}
console.log(insertionSort([1, 4, 2, 8, -11, -1119, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));