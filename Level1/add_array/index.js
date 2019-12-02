// adds number in given array , if not array returns undefined, if not number returns undefined

let addArray = (arr) => {
    let addArray = 0;
    if(Array.isArray(arr)){
        for(let i=0;i < arr.length;i++){
            if(typeof arr[i] == 'number' ){
            addArray = arr[i]+addArray;
            }
            else{
                return null;
            }
        }
        return addArray;
    }
    else{
        return null;
    } 
};

module.exports = { addArray };