import filter from "./src/filter.js";

// Used for testing the functions and debugging

const arr = [1, 2, 3, 4, 5];

function predicate(value, index, array) {
    if (value % 2 == 0) {
        return true;
    }

    return false;
}

console.log(filter(arr, predicate));