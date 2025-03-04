// Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted part of the list and swapping it with the first unsorted element. This process continues until the list is completely sorted.


function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIn = i;

        for (let j = i + 1; j < n; j++) {

        if (arr[j] < arr[minIn]) {
                minIn = j
            }
        }
        if (minIn !== i) {
            let temp = arr[i];
            arr[i] = arr[minIn];
            arr[minIn] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([2,5,1,4,9,6]));


