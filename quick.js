/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length -1) {
    const trade = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };
    let pivot = arr[start];
    let tradeIdx = start;
    for (let i = start +1; i <= end; i++) {
        if (pivot > arr[i]) {
            tradeIdx++;
            trade(arr, tradeIdx, i);
        }
    }
    trade(arr, start, tradeIdx);
    return tradeIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx-1);
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}


module.exports = { quickSort, pivot };
