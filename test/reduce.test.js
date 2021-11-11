import { assert, expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce.js tests", () => {
    it("Check different iteratee values", () => {
        // Define data for the test case
        const arr = [1, 2, 2, 4, 8, 5];
        const iteratee = (acc, value, key) => {
            return acc + value;
        };

        const originalFunctionResult = reduce(arr, iteratee);
        // expect(reduce(arr, iteratee)).to.not.throw();
        expect(originalFunctionResult).to.deep.equal(22);

        // Check other data types
        const arr3 = [{
                name: "Mickey Mouse",
                type: "Mouse",
            },
            {
                name: "Donald Duk",
                type: "Duck",
            },
            {
                name: "Peter the pig",
                type: "Pig",
            },
            {
                name: "Minnie the Mouse",
                type: "Mouse",
            },
        ];
        const iteratee3 = (result, value, key) => {
            const type = value.type;
            (result[type] || (result[type] = [])).push(value.name);
            return result;
        };

        // Call the function and check that function does not modify the content of arr
        const originalFunctionResult3 = reduce(arr3, iteratee3, {});

        assert.isObject(originalFunctionResult3);
        expect(originalFunctionResult3).to.have.keys(["Mouse", "Duck", "Pig"]);

        // expect(originalFunctionResult3).to.have.all.keys("name", "type");
        // expect(originalFunctionResult3).to.have.all.keys("name", "type");
    });

    it("Original array is not modified", () => {
        const arr = ["dog", "cat", "moose", "house"];
        const arrLength = arr.length;
        const iteratee = (value, index, array) => {
            return {...value, index: index };
        };

        // Call the function and check that function does not modify the content of arr
        reduce(arr, iteratee);

        expect(arr).to.have.lengthOf(arrLength);
    });
});