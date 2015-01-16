var isArray = require("is_array");


function flattenArrayNoDepth(array, result) {
    var localIsArray = isArray,
        i = -1,
        il = array.length - 1,
        value;

    while (i++ < il) {
        value = array[i];

        if (localIsArray(value)) {
            flattenArrayNoDepth(value, result);
        } else {
            result[result.length] = value;
        }
    }

    return result;
}

function flattenArrayDepth(array, depth, result) {
    var localIsArray = isArray,
        i = -1,
        il = array.length - 1,
        value;

    while (i++ < il) {
        value = array[i];

        if (depth > 0 && localIsArray(value)) {
            flattenArrayDepth(value, depth - 1, result);
        } else {
            result[result.length] = value;
        }
    }

    return result;
}


module.exports = function flattenArray(array, depth) {
    depth = depth != null ? (depth <= -1 ? -1 : depth) : -1;
    return depth === -1 ? flattenArrayNoDepth(array, []) : flattenArrayDepth(array, depth, []);
};
