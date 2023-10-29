
//Using Bubble sort

function bubbleSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let inputArray = [5, 2, 8, 1, 4];
let sortedArray = bubbleSortDescending(inputArray);
console.log(sortedArray); // Output: [8, 5, 4, 2, 1]
