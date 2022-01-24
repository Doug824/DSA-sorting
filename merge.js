function merge(arr1, arr2) {
    let solution = [];
    let i = 0
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            solution.push(arr1[i]);
            i++;
        } else {
            solution.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        solution.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        solution.push(arr2[j]);
        j++;
    }
    return solution;
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length /2);
    const right = mergeSort(arr.slice(mid));
    const left = mergeSort(arr.slice(0, mid));
    return merge(left, right);
}


module.exports = { merge, mergeSort};
