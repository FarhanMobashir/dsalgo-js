function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let idx = findMin(arr, i);
        // console.log(idx)
        [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
    return arr;
}
function findMin(arr, idx) {
    let min = arr[idx];
    let minIdx = idx;
    for (let i = idx + 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIdx = i;
        }
    }
    return minIdx;
}

console.log(selectionSort([1, 4, 2, 8, -11, -1119, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

console.log(findMin([1, 1, 3, 2, 4, 4], 2))