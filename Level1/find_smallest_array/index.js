// find the smallest number from a given array

const smallest_array = (arr) => {
    if(Array.isArray(arr)){
        let smallest = arr[0];
        for(let i=0;i< arr.length; i++){
            if(typeof arr[i] !== 'number'){
                return
            }
            if(smallest > arr[i])
            {
                smallest = arr[i];
            }
        }
        return smallest;
    }
}

module.exports = { smallest_array };