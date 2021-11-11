import { assert, expect } from "chai";
import compact from "../src/compact.js";

describe("compact.js tests", () => {
    it("Remove false", () => {
        // Define data for the test case
        const arr = [1, 2, false, 3];

        const result = compact(arr);
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(3);
        expect(arr).to.include(false);
        expect(result).to.not.include(false);
    });

    it("Remove zeros", () => {
        // Define data for the test case
        const arr = [0, 1, 2, 0, 3];

        const result = compact(arr);
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(3);
        expect(arr).to.include(0);
        expect(result).to.not.include(0);
    });

    it("Remove null an empty string", () => {
        // Define data for the test case
        const arr = [undefined, null, NaN, 1, 2, "", 3];

        const result = compact(arr);
        assert.isArray(result); // Should be an array
        expect(result).to.have.lengthOf(3);
        expect(arr).to.include(null).include(undefined).include(NaN);
        expect(result).to.not.include(null).not.include(undefined).not.include(NaN);
    });
});