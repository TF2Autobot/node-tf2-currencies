'use strict';

/**
 * Truncate a number
 * @param {number} number Number to truncate
 * @param {number} decimals Amount of decimal places to keep
 * @return {number} Returns the truncated number
 */
module.exports = function (number) {
    const decimals = 2;
    // Get the factor to truncate by
    const factor = Math.pow(10, decimals);

    const truncated = Math.floor(number * factor) / factor;
    return truncated;
};