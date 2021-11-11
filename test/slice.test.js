import { assert, expect } from "chai";
import slice from "../src/slice.js";

describe("slice.js tests", () => {
    it("End is not included in the return value", () => {
        // Define data for the test case
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];

        const result = slice(arr, 4, 7); // Should be [4,5,6]
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(3);
        expect(result).to.include(4).include(5).include(6);
        expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7]); // Do  not modify original vlaue
    });

    it("Negative slicing", () => {
        // Define data for the test case
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];

        const result = slice(arr, -3); // Should be [4,5,6]
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(3);
        expect(result).to.include(5).include(6).include(7);
        expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7]); // Do  not modify original vlaue

        const result2 = slice(arr, -5, -2);
        assert.isArray(result); // Should be an array
        expect(result2).to.have.lengthOf(3);
        expect(result2).to.include(3).include(4).include(5);
    });

    it("Indexes out of array bounds", () => {
        // Define data for the test case
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];

        const result = slice(arr, 12); // Should be [4,5,6]
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(0);
    });
});