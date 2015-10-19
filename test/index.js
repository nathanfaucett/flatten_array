var tape = require("tape"),
    flattenArray = require("..");


tape("flattenArray(array: Array[, depth: Number])", function(assert) {
    assert.deepEqual(flattenArray([
        [0, 1, 2]
    ]), [0, 1, 2], "should flatten array");

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
    ], "should flatten array to passed depth");

    assert.end();
});
