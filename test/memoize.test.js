import { assert, expect } from "chai";
import memoize from "../src/memoize.js";

describe("memoize.js tests", () => {
    it("Memoization for object", async() => {
        // Define data for the test case
        const object = { a: 1, b: 2 };
        const other = { c: 3, d: 4 };

        // Simulate slow function that we want to memoize
        async function values(v) {
            let rv = [];
            await new Promise((r) => setTimeout(r, 1000)); // Simulate slow function
            for (let i in v) {
                rv.push(v[i]);
            }
            return rv;
        }
        values = memoize(values);
        values(object);
        values(other);

        const result = await values(object);
        const result2 = await values(other);
        expect(result[0]).to.eql(1);
        expect(result2[0]).to.eql(3);
    });

    it("Throw typeError with invalid parameters", () => {
        // Define data for the test case
        const data = { a: [{ b: { c: 3 } }] };

        const InvalidParameters = () => memoize(data, "I am groot");
        expect(InvalidParameters).to.throw(TypeError);
    });
});