import { assert, expect } from "chai";
import get from "../src/get.js";

describe("get.js tests", () => {
    it("Get object inside json list", () => {
        // Define data for the test case
        const data = { a: [{ b: { c: 3 } }] };

        const result = get(data, "a[0].b.c", -1);
        const result2 = get(data, ["a", "0", "b", "c"], -1);
        expect(result).to.eql(3);
    });

    it("Return default value when cannot get value", () => {
        // Define data for the test case
        const data = { a: [{ b: { c: 3 } }] };

        const result = get(data, "a[34].g.f", -1);
        expect(result).to.eql(-1);
    });
});