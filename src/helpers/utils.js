/**
 * Sort array in ascending order with unique elements
 * @param Array of Numbers When passed, will be sorted in ascending order and then filtered to get only unique values
 */
export const sortUnique = arr => arr.sort((a, b) => a - b).filter((num, i, a) => num && i === a.indexOf(num)).map(num => num && parseInt(num)) // Alternatively, To get a unique array, we can also use the javascript helper "new Set()"
