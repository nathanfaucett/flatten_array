var assert = require("assert"),
    flattenArray = require("../src/index");


describe("flattenArray(array, depth)", function() {
    it("should flatten array to passed depth", function() {
        assert.deepEqual(flattenArray([
            [0, 1, 2]
        ]), [0, 1, 2]);

        assert.deepEqual(flattenArray([
            [
                [0],
                [1],
                [2]
            ]
        ], 1), [
            [0],
            [1],
            [2]
        ]);
    });
});
