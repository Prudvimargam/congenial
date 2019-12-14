// given arr = [ [[1], [[2, 4, 'a']], ['df'], [{a:1}, {b:2}]] ]
// resultant arr = [ 1, 2, 4, 'a', 'df', {a:1}, {b:2} ]

// hint -> recursive function

let flattened_Arr = [];
const flatten_arr = (arr) => {
    if( arr && Array.isArray(arr)){
        for(let val of arr){
            flatten_arr(val);
        }
    } else  {
    flattened_Arr.push(arr);
    }
} 

module.exports = { flatten_arr };

// const factorial = (a) => {
//     // a * a-1 * a-2 * ... 1

//     if(a === 1){
//         return 1;
//     }

//     return a * factorial(a - 1);

// }

// console.log(factorial(4))
