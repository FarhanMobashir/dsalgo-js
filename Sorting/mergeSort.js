const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    // Split Array in into right and left
    let left = arr.slice(0, arr.length / 2);
    let right = arr.slice(arr.length / 2, arr.length);
    console.log(left, right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let mergeArr = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergeArr.push(left[leftIndex])
            leftIndex++;
        } else {
            mergeArr.push(right[rightIndex])
            rightIndex++;
        }
    }
    return mergeArr;
}
// console.log(merge([99, 44, 6, 2, 1], [5, 63, 87, 283, 4, 0]))

const answer = mergeSort(numbers);
console.log(answer);