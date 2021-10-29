import filter from "./src/filter.js";
import map from "./src/map.js";

// Used for testing the functions and debugging

let arr = [1, 2, 3, 4, 5];

function iteratee(value) {
    console.log("This was called");
    return value ** 2;
}

console.log(
    map(arr, (value, i, arr) => {
        arr.pop();
        return value + i;
    })
);

arr = [1, 2, 3, 4, 5];

console.log(
    arr.map((value, i, arr) => {
        arr.pop();
        return value + i;
    })
);