var clamp = require("@nathanfaucett/clamp"),
    isArray = require("@nathanfaucett/is_array"),
    isNumber = require("@nathanfaucett/is_number");


var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;


module.exports = flattenArray;


function flattenArray(array, depth) {
    depth = clamp(isNumber(depth) ? +depth : -1, -1, MAX_SAFE_INTEGER);
    return depth === -1 ? flattenArrayNoDepth(array, []) : flattenArrayDepth(array, depth, []);
}

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
