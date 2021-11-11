import filter from "./src/filter.js";
import map from "./src/map.js";
import slice from "./src/slice.js";
// import compact from "./src/compact.js";
// Used for testing the functions and debugging

function compact(array) {
    let resIndex = -1;
    const result = [];

    for (const value of array) {
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}

const arr = [0, 1, 2, false, 3];
console.log(compact(arr));
console.log(compact([5, 1, false, 2, "", 3]));
// function iteratee(value) {
//     console.log("This was called");
//     return value ** 2;
// }

// console.log(
//     map(arr, (value, i, arr) => {
//         arr.pop();
//         return value + i;
//     })
// );

// arr = [1, 2, 3, 4, 5];

// console.log(
//     arr.map((value, i, arr) => {
//         arr.pop();
//         return value + i;
//     })
// );