function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([99, 44, 6, -99, 32, -6, 2, 1, 5, 63, 87, 283, 4, 0]));