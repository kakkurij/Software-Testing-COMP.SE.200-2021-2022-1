import filter from "./src/filter.js";
import map from "./src/map.js";
import slice from "./src/slice.js";
import memoize from "./src/memoize.js";
// import compact from "./src/compact.js";
// Used for testing the functions and debugging

// JS object are mutable, meaning they can be changed
// https://discuss.python.org/t/why-do-my-lists-get-modified-when-passed-to-a-function/5036/2
let i = [1, 2, 3, 4];

const filtered = i.filter((value, ind, arr) => {
    if (ind < arr.length) {
        arr.push("not this");
    }

    return value > 2;
});
console.log(filtered);
console.log(i);

const modifier = (value) => {
    value.push("things");
};

modifier(i);
console.log(i);

const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };

// Simulate slow function that we want to memoize
async function values(v) {
    let rv = [];
    await new Promise((r) => setTimeout(r, 2000)); // Simulate slow function

    for (let i in v) {
        rv.push(v[i]);
    }

    console.log("Memoization finished");

    return rv;
}
values = memoize(values);
values(object);
values(other);

console.log(await values(object));
console.log(await values(other));

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