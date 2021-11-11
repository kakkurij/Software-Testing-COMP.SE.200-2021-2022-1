import { assert, expect } from "chai";
import every from "../src/every.js";

describe("every.js tests", () => {
    it("Can handle positive input", () => {
        // Define data for the test case
        const data = [1, 2, 3, 4, 5, 6, 7];

        const predicate = (value, index) => {
            return value > index;
        };

        const result = every(data, predicate);
        assert.isBoolean(result);
        expect(result).to.eql(true);
    });

    it("Handle empty array", () => {
        // Define data for the test case
        const data = [];

        const result = every(data, Boolean);
        assert.isBoolean(result);
        expect(result).to.eql(true);
    });
});