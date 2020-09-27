exports.min = function min(array) {
   
    if (array === undefined || array[0] === undefined ) {
        return 0;
    }
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    return result;
}

exports.max = function max(array) {
    
    if (array === undefined || array[0] === undefined) {
        return 0;
    }
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

exports.avg = function avg(array) {

    if (array === undefined || array[0] === undefined) {
        return 0;
    }
    let result;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum +=array[i]
    }

    result = sum /array.length;

    return result;
}
