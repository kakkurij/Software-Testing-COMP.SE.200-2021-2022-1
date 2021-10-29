import { assert, expect, should } from "chai";
import map from "../src/map.js";

describe("Map.js tests", () => {
    it("Check different iteratee values", () => {
        // Define data for the test case
        const arr = [1, 2, 2, 4, 8, 5];
        const iteratee = (value, index, array) => {
            // array.pop();
            return value + index;
        };

        const originalFunctionResult = map(arr, iteratee);
        // expect(map(arr, iteratee)).to.not.throw();
        expect(originalFunctionResult).to.deep.equal([1, 3, 4, 7, 12, 10]);

        // Check other data types
        const arr2 = ["dog", "cat", "moose", "house"];
        const iteratee2 = (value, index, array) => {
            return value.length;
        };

        // Call the function and check that function does not modify the content of arr
        const originalFunctionResult2 = map(arr2, iteratee2);

        expect(originalFunctionResult2).to.deep.equal([3, 3, 5, 5]);

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
        const iteratee3 = (value, index, array) => {
            return {...value, index: index };
        };

        // Call the function and check that function does not modify the content of arr
        const originalFunctionResult3 = map(arr3, iteratee3);

        //expect(originalFunctionResult3).to.have.all.keys("name", "type");
        expect(originalFunctionResult3)
            .to.be.a("array")
            .to.have.lengthOf(arr3.length);

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
        map(arr, iteratee);

        expect(arr).to.have.lengthOf(arrLength);
    });
});