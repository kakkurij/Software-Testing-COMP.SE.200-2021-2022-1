import { assert, expect, should } from "chai";
import filter from "../src/filter.js";

describe("Filter.js tests", () => {
    it("Check different predicate values", () => {
        // Define data for the test case
        const arr = [1, 2, 2, 4, 8, 5];
        const predicate = (value, index, array) => {
            if (value % 2 == 0) {
                return true;
            }

            return false;
        };

        const originalFunctionResult = filter(arr, predicate);
        // expect(filter(arr, predicate)).to.not.throw();
        expect(originalFunctionResult).to.deep.equal([2, 2, 4, 8]);

        // Check other data types
        const arr2 = ["dog", "cat", "moose", "house"];
        const predicate2 = (value, index, array) => {
            if (value.length > 3) {
                return true;
            }

            return false;
        };

        // Call the function and check that function does not modify the content of arr
        const originalFunctionResult2 = filter(arr2, predicate2);

        expect(originalFunctionResult2).to.deep.equal(["moose", "house"]);

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
        const predicate3 = (value, index, array) => {
            if (array[index].type === "Mouse") {
                return true;
            }

            return false;
        };

        // Call the function and check that function does not modify the content of arr
        const originalFunctionResult3 = filter(arr3, predicate3);

        //expect(originalFunctionResult3).to.have.all.keys("name", "type");
        expect(originalFunctionResult3).to.be.a("array").to.have.lengthOf(2);
        // expect(originalFunctionResult3).to.have.all.keys("name", "type");
        // expect(originalFunctionResult3).to.have.all.keys("name", "type");
    });

    it("Original array is not modified", () => {
        const arr = ["dog", "cat", "moose", "house"];
        const predicate = (value, index, array) => {
            if (value.length > 3) {
                return true;
            }

            return false;
        };

        // Call the function and check that function does not modify the content of arr
        filter(arr, predicate);

        expect(arr).to.deep.equal(["dog", "cat", "moose", "house"]);
    });
});