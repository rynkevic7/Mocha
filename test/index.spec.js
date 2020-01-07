const assert = require("assert");
const {sum, mult} = require("../index.js");

describe("function sum", () => {
    it("should function sum equals 5 ", () => {
        assert.equal(sum(2, 3), 5);
    });

    it("should function sum not equal 0", () => {
        assert.notEqual(sum(2, 3), 0);
    });

})


it("should function mult equals 6 ", () => {
    assert.equal(mult(2, 3), 6);
});

it("should function mult not equal 5", () => {
    assert.notEqual(mult(2, 3), 5);
});