import { assert, expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp.js tests", () => {
    it("Number within boundaries", () => {
        // Define data for the test case

        const result = clamp(10, 0, 20);
        expect(result).to.eql(10);
    });

    it("lower boundary bigger than upper bound", () => {
        const CheckLowerBoundaryHigherThanUpperBound = () => {
            return clamp(10, 5, 2);
        };

        expect(CheckLowerBoundaryHigherThanUpperBound).to.throw();
    });

    it("Number outside boundaries", () => {
        const res1 = clamp(10, 3, 5);
        const res2 = clamp(10, 100, 200);
        const res3 = clamp(10, -10, 0);
        const res4 = clamp(10, -100, -50);

        expect(res1).to.eql(5);
        expect(res2).to.eql(100);
        expect(res3).to.eql(0);
        expect(res4).to.eql(-50);
    });
});