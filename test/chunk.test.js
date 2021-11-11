import { assert, expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk.js tests", () => {
    it("Handle negative size", () => {
        // Define data for the test case
        const arr = [1, 2, 3, 4, 5];

        const result = chunk(arr, -2);
        expect(result).to.have.lengthOf(0);
        expect(chunk([])).to.have.lengthOf(0);
    });

    it("Check size bigger than array", () => {
        // Define data for the test case
        const arr = [1, 2, 3, 4, 5];

        const result = chunk(arr, 6);
        expect(result).to.have.lengthOf(arr.length);
    });

    it("Check valid array and size", () => {
        // Define data for the test case
        const arr = [1, 2, 3, 4, 5];

        const result = chunk(arr, 3);
        expect(result).to.have.lengthOf(2);

        expect(result[0]).to.have.lengthOf(3);
    });
});