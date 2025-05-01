export function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i], i);
    }
    return result;
}

export function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            result[result.length] = array[i];
        }
    }
    return result;
}