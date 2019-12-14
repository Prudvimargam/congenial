// read about spread operator '...'
// combine 2 arrays using it and return the combined array

const spread_operator = (arr1, arr2) => {
    let combinedArr = null;
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        combinedArr =[...arr1,...arr2];
    }

    return combinedArr;
}

module.exports = { spread_operator };