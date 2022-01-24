function selectionSort(arr) {
    const trade = (arr, i1, i2) =>
        ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
  
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j;
            }
        }
        if (i !== low) trade(arr, i, low);
    }
    return arr;
}
  

module.exports = selectionSort;
